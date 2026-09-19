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
		"content": `<style>.djyw7_hwy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M22 8V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71H18V11c0-1.66 1.34-3 3-3z");
}

.h5_znab0q {
  fill: currentColor;
  d: path("M14 22V10L3.71 20.29c-.63.63-.19 1.71.7 1.71zm6-11v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1m0 11h2v-2h-2z");
}
</style><path class="djyw7_hwy"/><path class="h5_znab0q"/>`,
		"fallback": "ic:round-signal-cellular-connected-no-internet-2-bar",
	});
}

export default Component;
