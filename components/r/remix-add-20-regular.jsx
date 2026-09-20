import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yp0gjyyxi {
  fill: currentColor;
  d: path("M2 2.5a.5.5 0 0 1 .5-.5H10a8 8 0 0 1 8 8v.003A7.98 7.98 0 0 1 15.292 16h-1.684A7 7 0 0 0 10 3H2.5a.5.5 0 0 1-.5-.5M10 18A8 8 0 0 1 4.708 4h1.684a7 7 0 0 0-3.356 6.716A7.005 7.005 0 0 0 10 17h7.5a.5.5 0 0 1 0 1zm.5-10.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 1 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2z");
}
</style><path class="yp0gjyyxi"/>`,
		"fallback": "fluent:remix-add-20-regular",
	});
}

export default Component;
