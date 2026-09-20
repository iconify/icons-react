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
		"content": `<style>.sz4geob8g {
  fill: currentColor;
  d: path("M3 17v-2h2v2zm3 0v-6h4V9H6V7h6v6H8v2h4v2zm7 0l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17z");
}
</style><path class="sz4geob8g"/>`,
		"fallback": "material-symbols:speed-0-2x-outline-sharp",
	});
}

export default Component;
