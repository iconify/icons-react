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
		"content": `<style>.hhs9ccc9u {
  fill: currentColor;
  d: path("M11 19v-6H2v-2h9V5l11 7zm2-3.65L18.275 12L13 8.65zM13 12");
}
</style><path class="hhs9ccc9u"/>`,
		"fallback": "material-symbols:line-end-arrow-outline-sharp",
	});
}

export default Component;
