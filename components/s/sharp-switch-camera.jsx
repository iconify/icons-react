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
		"content": `<style>.xn3ogcbqp {
  fill: currentColor;
  d: path("M22 4h-5.17L15 2H9L7.17 4H2v16h20zm-7 11.5V13H9v2.5L5.5 12L9 8.5V11h6V8.5l3.5 3.5z");
}
</style><path class="xn3ogcbqp"/>`,
		"fallback": "ic:sharp-switch-camera",
	});
}

export default Component;
