import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w_0c6w1yz {
  fill: currentColor;
  d: path("M14.146 14.854L11.293 12H9.707l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708L9.293 10l-2-2H2.5a.5.5 0 0 1 0-1h3.793l-3-3H2.5a.5.5 0 0 1-.175-.968L1.146 1.854a.5.5 0 1 1 .708-.708l13 13a.5.5 0 0 1-.708.708M10.121 8l-1-1H12.5a2.5 2.5 0 0 1 1.273 4.652l-.747-.747A1.5 1.5 0 0 0 12.5 8zm-4-4l-1-1H13.5a.5.5 0 0 1 0 1zM6 11a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1 0-1z");
}
</style><path class="w_0c6w1yz"/>`,
		"fallback": "fluent:text-wrap-off-16-regular",
	});
}

export default Component;
