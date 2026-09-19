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
		"content": `<style>.utnxrcmmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.633 21.751c.013 1.05-4.431 1.953-9.926 2.019h0c-5.495.066-9.96-.732-9.973-1.78c-.012-1.05 4.432-1.954 9.926-2.02h.001c5.495-.065 9.96.732 9.972 1.781");
}

.xwotbdn_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 31.426c17.863 0 38.213-1.91 39-8.052c0-2.621-5.101-7.128-30.334-6.781z");
}
</style><path class="xwotbdn_u"/><path class="utnxrcmmj"/>`,
		"fallback": "arcticons:panasonic-diga",
	});
}

export default Component;
