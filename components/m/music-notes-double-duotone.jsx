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
		"content": `<style>.afqo38bdn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 19a3 3 0 1 1 0-6a3 3 0 0 1 0 6M6 21a3 3 0 1 1 0-6a3 3 0 0 1 0 6");
}

.ft5dv1b6b {
  fill: none;
}

.t3w7h0b1x {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m12-2a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6 2V9c0-.995.403-1.8 1-2l9-3c.984-.328 2 .18 2 1v11M9 12l12-4");
}
</style><g class="ft5dv1b6b"><path class="afqo38bdn"/><path class="t3w7h0b1x"/></g>`,
		"fallback": "coolicons:music-notes-double-duotone",
	});
}

export default Component;
