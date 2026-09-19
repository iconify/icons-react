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
		"content": `<style>.rh01k1fas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.895 31.736h22.77m-22.77 2.79h22.77a1.395 1.395 0 0 0 0-2.79m-22.77 2.79a1.395 1.395 0 0 1 0-2.79m7.675-18.262h25.34m-25.34 2.79h25.34a1.395 1.395 0 0 0 0-2.79m-25.34 2.79a1.395 1.395 0 0 1 0-2.79m-.038 9.158h15.105m-15.105 2.79h15.105a1.395 1.395 0 0 0 0-2.79m-15.105 2.79a1.395 1.395 0 0 1 0-2.79m26.794-1.664L35.387 31.31l.315 3.201l2.856-1.78l4.884-10.47m-3.116-1.292a1.7 1.7 0 0 1 3.116 1.291");
}
</style><path class="rh01k1fas"/>`,
		"fallback": "arcticons:simpan",
	});
}

export default Component;
