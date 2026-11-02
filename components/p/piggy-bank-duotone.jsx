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
		"content": `<style>.byro1hbim {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6.236 3.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338M17 10.535A4 4 0 0 1 18.465 12H19a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.535A4 4 0 0 1 15 20H8a5 5 0 0 1 0-10h4.586l2.707-2.707A1 1 0 0 1 17 8Z");
}

.ft5dv1b6b {
  fill: none;
}

.tu5_sx12l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 11h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H8a4 4 0 1 1 0-8zm2 0l3-3v3Zm5 2h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1zm-3 1h.01M7 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m1 14v2m6-2v2");
}
</style><g class="ft5dv1b6b"><path class="byro1hbim"/><path class="tu5_sx12l"/></g>`,
		"fallback": "coolicons:piggy-bank-duotone",
	});
}

export default Component;
