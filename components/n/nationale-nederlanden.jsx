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
		"content": `<style>.dx55psb1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5c-7.49 0-14.078 3.834-17.927 9.642h26.446l3.827 5.594l-3.743 18H26.38l-6.771-9.968l-1.935 9.968s-5.215.252-4.962 0c.252-.253 3.07-14.552 3.07-14.552h6.14l6.855 9.968l2.734-14.72H14.14c-3.384 0-8.686 1.115-11.607 8.226C2.884 36.225 12.348 45.5 24 45.5c11.874 0 21.5-9.626 21.5-21.5S35.874 2.5 24 2.5");
}
</style><path class="dx55psb1l"/>`,
		"fallback": "arcticons:nationale-nederlanden",
	});
}

export default Component;
