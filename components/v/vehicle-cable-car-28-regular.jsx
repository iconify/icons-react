import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ftz-srb-u {
  fill: currentColor;
  d: path("M25.151 3.007a.75.75 0 1 1 .198 1.487L17.5 5.54v3.71c0 .644-.187 1.245-.51 1.75h2.26A3.75 3.75 0 0 1 23 14.75v7.5A2.75 2.75 0 0 1 20.25 25H7.75A2.75 2.75 0 0 1 5 22.25v-7.5A3.75 3.75 0 0 1 8.75 11h5.5A1.75 1.75 0 0 0 16 9.25V5.74L2.85 7.494a.75.75 0 0 1-.199-1.487l13.35-1.78V3.75a.75.75 0 0 1 1.5 0v.277zm-3.65 11.743a2.25 2.25 0 0 0-2.25-2.25H8.75a2.25 2.25 0 0 0-2.25 2.25v3.75h15zM6.5 20v2.25c0 .69.559 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V20z");
}
</style><path class="ftz-srb-u"/>`,
		"fallback": "fluent:vehicle-cable-car-28-regular",
	});
}

export default Component;
