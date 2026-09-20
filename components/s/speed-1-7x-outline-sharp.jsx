import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vys4p1b4z {
  fill: currentColor;
  d: path("M6 17v-2h2v2zm-3 0V9H1V7h4v10zm12 0l3-5l-3-5h2l2 3.325L21 7h2l-3 5l3 5h-2l-2-3.325L17 17zm-5 0l2-8H8V7h6v2.05L12 17z");
}
</style><path class="vys4p1b4z"/>`,
		"fallback": "material-symbols:speed-1-7x-outline-sharp",
	});
}

export default Component;
