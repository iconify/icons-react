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
		"content": `<style>.ilwcq469z {
  fill: currentColor;
  d: path("M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m5 9h-4v4h-2v-4H7v-2h4V7h2v4h4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.w7hqkr36m {
  fill: currentColor;
  d: path("M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m1-13h-2v4H7v2h4v4h2v-4h4v-2h-4z");
}
</style><path class="ilwcq469z"/><path class="w7hqkr36m"/>`,
		"fallback": "ic:twotone-control-point",
	});
}

export default Component;
