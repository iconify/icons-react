import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v5_6s2fow {
  fill: currentColor;
  d: path("M161.76 28.41a4 4 0 0 0-4.22.43L86.63 84H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 164 224V32a4 4 0 0 0-2.24-3.59M156 215.82l-65.54-51A4.06 4.06 0 0 0 88 164H40a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h48a4.06 4.06 0 0 0 2.46-.84l65.54-51ZM204 104v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0");
}
</style><path class="v5_6s2fow"/>`,
		"fallback": "ph:speaker-simple-low-thin",
	});
}

export default Component;
