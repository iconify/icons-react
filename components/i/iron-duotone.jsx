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
		"content": `<style>.e2e4u9bhk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 11v5a2 2 0 0 1-2 2H4c-.369 0-.369-.631 0-1l5-5c.64-.64 1.36-1 2-1zm0 0V8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3");
}

.ft5dv1b6b {
  fill: none;
}

.uqdhlg0qy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 16a2 2 0 0 1-2 2H4c-.369 0-.369-.631 0-1l5-5c.521-.52 1.237-1 2-1h10Z");
}
</style><g class="ft5dv1b6b"><path class="uqdhlg0qy"/><path class="e2e4u9bhk"/></g>`,
		"fallback": "coolicons:iron-duotone",
	});
}

export default Component;
