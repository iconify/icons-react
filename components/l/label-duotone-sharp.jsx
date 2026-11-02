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
		"content": `<style>.d8olgobtu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 6h5l6 6l-6 6H4V6Z");
}

.ft5dv1b6b {
  fill: none;
}

.tw0dguk3u {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 6h5l6 6l-6 6H4V6z");
}
</style><g class="ft5dv1b6b"><path class="d8olgobtu"/><path class="tw0dguk3u"/></g>`,
		"fallback": "coolicons:label-duotone-sharp",
	});
}

export default Component;
