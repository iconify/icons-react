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
		"content": `<style>.bkch2vbzi {
  fill: currentColor;
  d: path("M3 19V5h10.73v1H4v12h16v-5.73h1V19zm6.339-2.644l-.708-.714l4.18-4.161H9.85v-1h4.65v4.65h-1v-2.937zm9.238-6.51q-1.01 0-1.717-.706t-.706-1.717t.706-1.716T18.577 5t1.716.707T21 7.423t-.707 1.717t-1.716.706");
}
</style><path class="bkch2vbzi"/>`,
		"fallback": "material-symbols-light:pin-invoke-outline-sharp",
	});
}

export default Component;
