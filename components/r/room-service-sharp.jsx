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
		"content": `<style>.f3pvvhbcx {
  fill: currentColor;
  d: path("M3.23 17.385v-1h17.54v1zM4 15v-.23q0-2.95 2.01-5.103Q8.022 7.516 11 7.097V5.653h2v1.442q2.985.42 4.992 2.571T20 14.77V15z");
}
</style><path class="f3pvvhbcx"/>`,
		"fallback": "material-symbols-light:room-service-sharp",
	});
}

export default Component;
