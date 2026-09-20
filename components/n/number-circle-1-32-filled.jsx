import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.euv-nrb3n {
  fill: currentColor;
  d: path("M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m16-7a1 1 0 0 0-1.96-.277l-.001.001l-.006.02l-.03.09a9 9 0 0 1-.74 1.593c-.57.967-1.444 2.033-2.705 2.655a1 1 0 1 0 .884 1.794c1.073-.529 1.913-1.273 2.558-2.037V22a1 1 0 1 0 2 0z");
}
</style><path class="euv-nrb3n"/>`,
		"fallback": "fluent:number-circle-1-32-filled",
	});
}

export default Component;
