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
		"content": `<style>.c5o0zjbap {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9M6 9h6m-6 4h.01M9 13h.01M12 13h.01M6 16h.01M9 16h.01M12 16h.01M15 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z");
}

.ft5dv1b6b {
  fill: none;
}

.zv7i-ewgy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z");
}
</style><g class="ft5dv1b6b"><path class="zv7i-ewgy"/><path class="c5o0zjbap"/></g>`,
		"fallback": "coolicons:phone-desk-duotone-round",
	});
}

export default Component;
