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
		"content": `<style>.deo_w_prh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 10h16v11H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.k8jv3ybuq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 10H4v11h16V10h-3m-2-4l-3-3l-3 3m3-3v10");
}
</style><g class="ft5dv1b6b"><path class="deo_w_prh"/><path class="k8jv3ybuq"/></g>`,
		"fallback": "coolicons:share-duotone-sharp",
	});
}

export default Component;
