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
		"content": `<style>.jz-ff68ry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.577 43.5V32.942c0-2.446 1.48-4.548 3.673-5.49c4.505-1.756 7.642-6.055 7.642-11.085C35.892 9.813 30.568 4.5 24 4.5S12.108 9.813 12.108 16.367a11.8 11.8 0 0 0 2.552 7.345m5.853-6.684h6.974m0-5.245v10.528m-6.974-10.528v10.528");
}
</style><path class="jz-ff68ry"/>`,
		"fallback": "arcticons:openstop",
	});
}

export default Component;
