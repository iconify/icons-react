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
		"content": `<style>.lrbh8obgj {
  fill: currentColor;
  d: path("M1.176 15.8A1.5 1.5 0 0 0 2.502 18h14.995a1.5 1.5 0 0 0 1.318-2.215l-7.6-14C10.643.731 9.13.74 8.57 1.798z");
}
</style><path class="lrbh8obgj"/>`,
		"fallback": "fluent:triangle-20-filled",
	});
}

export default Component;
