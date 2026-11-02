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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.slaixwgbi {
  d: path("M15 15a6 6 0 1 1-6-6a4.269 4.269 0 0 0 6 6");
}

.wh05cbb3m {
  stroke-opacity: 0.4;
  d: path("M13.026 9.18a3 3 0 0 1 1.793 1.794M19 12h2m-9-7V3m4.95 4.05l1.414-1.414");
}
</style><g class="nrj6p8qat"><path class="wh05cbb3m"/><path class="slaixwgbi"/></g>`,
		"fallback": "coolicons:sun-moon-duocolor-round",
	});
}

export default Component;
