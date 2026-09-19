import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.idvhz_b2y {
  fill: currentColor;
  d: path("m59.466 6.317l-1.783-1.784a8.654 8.654 0 0 0-12.234 0L9.419 40.565L2.278 59.237c-.838 2.21.281 3.323 2.484 2.481l18.675-7.134l36.029-36.033c3.381-3.376 3.377-8.853 0-12.234m-22.629 9.486l2.508 2.507l-24.764 24.766l-2.508-2.509zm3.834 3.834l3.695 3.696l-24.763 24.765l-3.695-3.695zM11.026 57.32l-4.342-4.346l4.201-10.941L21.964 53.11zm12.411-5.387l-2.506-2.509l24.762-24.765l2.508 2.509zm26.209-26.21L38.281 14.36l2.827-2.828l11.365 11.363z");
}
</style><path class="idvhz_b2y"/>`,
		"fallback": "emojione-monotone:pencil",
	});
}

export default Component;
