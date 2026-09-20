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
		"content": `<style>.mnl2zib4p {
  fill: currentColor;
  d: path("M3 19V5h18v14zm5.154-4.154h7.692V9.154H8.154z");
}
</style><path class="mnl2zib4p"/>`,
		"fallback": "material-symbols-light:picture-in-picture-center-sharp",
	});
}

export default Component;
