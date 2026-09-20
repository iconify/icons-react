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
		"content": `<style>.zhkjxts0k {
  fill: currentColor;
  d: path("M5 19h14V9.873q-.45.294-.953.46T17 10.5q-1.458 0-2.479-1.021T13.5 7q0-.544.166-1.047q.167-.503.461-.953H5zm-1 1V4h16v16zM5 5v14z");
}
</style><path class="zhkjxts0k"/>`,
		"fallback": "material-symbols-light:ripples-outline-sharp",
	});
}

export default Component;
