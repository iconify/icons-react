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
		"content": `<style>.fm7928b2m {
  fill: currentColor;
  d: path("M20 14h2v2h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6M20 7h2v5h-2zm-10 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2");
}

.r30seib4b {
  fill: currentColor;
  d: path("M10 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m0 8c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="r30seib4b"/><path class="fm7928b2m"/>`,
		"fallback": "ic:twotone-disc-full",
	});
}

export default Component;
