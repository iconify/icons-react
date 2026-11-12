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
		"content": `<style>.euo_v4biu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 5a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4h-6a2 2 0 0 1-2-2m-8 8a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0Zm15 6h-4v-4m0 4l6-6");
}

.ft5dv1b6b {
  fill: none;
}

.ogigsp2zd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 2h6a3 3 0 1 1 0 6h-6a3 3 0 1 1 0-6M8 13v6a3 3 0 1 1-6 0v-6a3 3 0 1 1 6 0");
}
</style><g class="ft5dv1b6b"><path class="ogigsp2zd"/><path class="euo_v4biu"/></g>`,
		"fallback": "coolicons:table-transpose-duotone-round",
	});
}

export default Component;
