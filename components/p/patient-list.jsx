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
		"content": `<style>.xcmc-unhv {
  fill: currentColor;
  d: path("M13.875 13.125Q13 12.25 13 11t.875-2.125T16 8t2.125.875T19 11t-.875 2.125T16 14t-2.125-.875M10 20v-1.9q0-.525.25-1t.7-.75q1.125-.675 2.388-1.012T16 15t2.663.338t2.387 1.012q.45.275.7.75t.25 1V20zm-7-6v-2h8v2zm0-8V4h12v2zm8.1 4H3V8h9q-.35.425-.562.925T11.1 10");
}
</style><path class="xcmc-unhv"/>`,
		"fallback": "material-symbols:patient-list",
	});
}

export default Component;
