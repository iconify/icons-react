import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lcymxltzz {
  fill: currentColor;
  d: path("M19.775 22.625L17.5 20.35q-1.225.8-2.625 1.225T12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12q0-1.475.425-2.875T3.65 6.5L1.375 4.225L2.8 2.8l18.4 18.4zM8 17h6.15l-2-2H8zm12.35.5l-6.45-6.45l2.7-2.7l-1.425-1.375L12.5 9.65l-6-6q1.225-.8 2.625-1.225T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12q0 1.475-.425 2.875T20.35 17.5");
}
</style><path class="lcymxltzz"/>`,
		"fallback": "material-symbols:offline-pin-off-sharp",
	});
}

export default Component;
