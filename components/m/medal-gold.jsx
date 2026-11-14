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
		"content": `<style>.h2b9cmqnr {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rct3c1iop {
  d: path("M8.25 9.75L5 2.5h4.75L12 5.75l2.25-3.25H19l-3.25 7.25M12.5 12.5l.123.307a1.5 1.5 0 0 0 1.393.943h.234a.47.47 0 0 1 .309.823l-.333.291a1.5 1.5 0 0 0-.449 1.56l.098.326a.47.47 0 0 1-.711.526l-.332-.221a1.5 1.5 0 0 0-1.664 0l-.332.221a.47.47 0 0 1-.711-.526l.098-.326a1.5 1.5 0 0 0-.449-1.56l-.333-.291a.47.47 0 0 1 .309-.823h.234a1.5 1.5 0 0 0 1.393-.943l.123-.307a.539.539 0 0 1 1 0");
}
</style><g class="hntgybcog"><path class="h2b9cmqnr"/><path class="rct3c1iop"/></g>`,
		"fallback": "uix:medal-gold",
	});
}

export default Component;
