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
		"content": `<style>.x_p4d-ptg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24A21.51 21.51 0 0 0 24 2.5h0l7.23 7.24l4.09-4M18.14 4.17a2.1 2.1 0 0 0-1.47.61L4.78 16.67a2.07 2.07 0 0 0 0 2.93L28.4 43.22a2.07 2.07 0 0 0 2.93 0l11.89-11.89a2.08 2.08 0 0 0 0-2.94L19.61 4.78a2.1 2.1 0 0 0-1.47-.61M2.5 24A21.51 21.51 0 0 0 24 45.5l-7.23-7.24l-4.09 4M6.91 21.73L21.73 6.91m4.54 34.18l14.82-14.83");
}
</style><path class="x_p4d-ptg"/>`,
		"fallback": "arcticons:tapnturn",
	});
}

export default Component;
