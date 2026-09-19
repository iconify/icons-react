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
		"content": `<style>.krriyyb6t {
  fill: currentColor;
  d: path("M3 19h18V5H3zm9-13c4.42 0 8 2.69 8 6s-3.58 6-8 6s-8-2.69-8-6s3.58-6 8-6");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.pwwbv9bwx {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zm-9-1c4.42 0 8-2.69 8-6s-3.58-6-8-6s-8 2.69-8 6s3.58 6 8 6m0-10c3.25 0 6 1.83 6 4s-2.75 4-6 4s-6-1.83-6-4s2.75-4 6-4");
}
</style><path class="krriyyb6t"/><path class="pwwbv9bwx"/>`,
		"fallback": "ic:twotone-vignette",
	});
}

export default Component;
