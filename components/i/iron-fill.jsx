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
		"content": `<style>.g7u_qk68w {
  fill: currentColor;
  d: path("M14 10V8a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a1.25 1.25 0 0 1-.582-.14c-.712-.371-.835-1.242-.549-1.932c.098-.237.242-.453.424-.635l5-5C9.008 10.578 9.961 10 11 10Zm6-2a1 1 0 0 0-1-1h-2a.997.997 0 0 0-1 1v2h4Z");
}
</style><path class="g7u_qk68w"/>`,
		"fallback": "coolicons:iron-fill",
	});
}

export default Component;
