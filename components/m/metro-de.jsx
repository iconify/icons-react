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
		"content": `<style>.yw989sb_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 9.071h12.214L24 22.643L30.786 9.07H43v29.86h-9.5V21.286l-6.786 17.643h-5.428L14.5 21.286v17.643H5z");
}
</style><path class="yw989sb_z"/>`,
		"fallback": "arcticons:metro-de",
	});
}

export default Component;
