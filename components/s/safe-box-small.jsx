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
		"content": `<style>.c3r6f6bvo {
  d: path("M11.9 18H2.5V5h19v9.2M6 18v2.5M5.5 8v2.5m0 2V15");
}

.dijzlobwb {
  d: path("M9.75 10a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm1.75 1.75V14m6-6v3.4m-2.75 6.35l3.25-3l3.25 3v3.5h-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c3r6f6bvo"/><path class="dijzlobwb"/></g>`,
		"fallback": "uix-sharp:safe-box-small",
	});
}

export default Component;
