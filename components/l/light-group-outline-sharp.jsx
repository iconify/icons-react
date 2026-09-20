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
		"content": `<style>.lccvwh6wp {
  fill: currentColor;
  d: path("M3 22v-2h8v2zm14-1q-.825 0-1.412-.587T15 19h-4v-.975q0-2.25 1.425-3.912T16 12.1V2h2v10.1q2.175.35 3.588 2.013T23 18.025V19h-4q0 .825-.575 1.413T17 21M6 19v-8H.7l2.4-9h7.8l2.4 9H8v8zm7.1-2h7.8q-.3-1.35-1.4-2.175T17 14q-1.375 0-2.475.825T13.1 17M3.3 9h7.4L9.375 4H4.65zM17 15.5");
}
</style><path class="lccvwh6wp"/>`,
		"fallback": "material-symbols:light-group-outline-sharp",
	});
}

export default Component;
