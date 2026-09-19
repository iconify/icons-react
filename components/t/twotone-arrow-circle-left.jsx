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
		"content": `<style>.a_c6pckuu {
  fill: currentColor;
  d: path("M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8m2 0c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10m-10 1h4v-2h-4V8l-4 4l4 4z");
}

.cndcx1b2a {
  fill: currentColor;
  d: path("M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8m-8 1h4v-2h-4V8l-4 4l4 4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="cndcx1b2a"/><path class="a_c6pckuu"/>`,
		"fallback": "ic:twotone-arrow-circle-left",
	});
}

export default Component;
