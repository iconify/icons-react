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
		"content": `<style>.nm9na9bwr {
  fill: currentColor;
  d: path("M5 5v14h9v-5h5V5zm7 9H7v-2h5zm5-4H7V8h10z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.onmdt1zzh {
  fill: currentColor;
  d: path("M19 5v9h-5v5H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2m-7 11H7v-2h5zm5-4H7V8h10z");
}
</style><path class="nm9na9bwr"/><path class="onmdt1zzh"/>`,
		"fallback": "ic:twotone-sticky-note-2",
	});
}

export default Component;
