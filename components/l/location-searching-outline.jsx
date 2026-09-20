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
		"content": `<style>.wl5tbzh_j {
  fill: currentColor;
  d: path("M11.5 21.5v-1.461q-3.125-.293-5.16-2.329t-2.328-5.16H2.55v-1h1.462q.292-3.125 2.328-5.16t5.16-2.328V2.6h1v1.462q3.125.292 5.16 2.328t2.329 5.16h1.461v1h-1.461q-.293 3.125-2.328 5.16q-2.036 2.036-5.161 2.328V21.5zm5.45-4.5Q19 14.95 19 12.05T16.95 7.1T12 5.05T7.05 7.1T5 12.05T7.05 17T12 19.05T16.95 17");
}
</style><path class="wl5tbzh_j"/>`,
		"fallback": "material-symbols-light:location-searching-outline",
	});
}

export default Component;
