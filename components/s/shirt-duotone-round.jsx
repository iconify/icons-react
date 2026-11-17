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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.sg8r-j2sy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 4L4 6c-.604.242-1 .638-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v4a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-4a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V7c0-.362-.396-.758-1-1l-5-2m0 0a3 3 0 0 1-6 0");
}

.vv_ueibfm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 4a3 3 0 1 0 6 0l5 2c.384.154.999.52 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-4a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V7c.001-.48.616-.846 1-1Z");
}
</style><g class="ft5dv1b6b"><path class="vv_ueibfm"/><path class="sg8r-j2sy"/></g>`,
		"fallback": "coolicons:shirt-duotone-round",
	});
}

export default Component;
