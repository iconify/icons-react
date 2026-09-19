import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.shr4o5xrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.911 14.544l19.733 11.512V42.5L5.911 30.989zM21.95 9.206l13.156 7.4V27.7L21.95 20.3zM33.45 5.5l8.639 4.933v6.578l-8.628-4.933z");
}
</style><path class="shr4o5xrq"/>`,
		"fallback": "arcticons:intel-unison",
	});
}

export default Component;
