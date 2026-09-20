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
		"content": `<style>.gczh0bb3b {
  fill: currentColor;
  d: path("M6 17v-2h2v2zm3 0v-6h3.5V9H9V7h5.5v6H11v2h3.5v2zm-6 0V9H1V7h4v10zm12.5 0l3-5l-3-5h2l2 3.325L21.5 7h2l-3 5l3 5h-2l-2-3.325l-2 3.325z");
}
</style><path class="gczh0bb3b"/>`,
		"fallback": "material-symbols:speed-1-2x-outline-sharp",
	});
}

export default Component;
