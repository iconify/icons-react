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
		"content": `<style>.swfko2fxf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.125 1.75h-2.25q-2.123 0-3.624 1.501T1.75 6.875v2.25q0 2.123 1.501 3.624t3.624 1.501h.909q-.034.368-.034.75q0 3.003 2.123 5.127T15 22.25t5.127-2.123T22.25 15t-2.123-5.127T15 7.75q-.382 0-.75.034v-.909q0-2.123-1.501-3.624T9.125 1.75");
}
</style><path class="swfko2fxf"/>`,
		"fallback": "uix-solid:union-type",
	});
}

export default Component;
