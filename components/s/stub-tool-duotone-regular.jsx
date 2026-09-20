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
		"content": `<style>.c_mq1h1gs {
  fill: currentColor;
  d: path("M6 13a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n88inkb8l {
  d: path("M15 5v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wre2-1qaq {
  d: path("M6 13a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.ycb-w6pqj {
  d: path("M9 5v3");
}
</style><g class="nrj6p8qat"><path class="c_mq1h1gs"/><path class="wre2-1qaq"/><path class="ycb-w6pqj"/><path class="n88inkb8l"/></g>`,
		"fallback": "iconmind:stub-tool-duotone-regular",
	});
}

export default Component;
