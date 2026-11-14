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
		"content": `<style>.d9wk8fbya {
  d: path("m12.5 9l.123.307a1.5 1.5 0 0 0 1.393.943h.234a.47.47 0 0 1 .309.823l-.333.291a1.5 1.5 0 0 0-.449 1.56l.098.326a.47.47 0 0 1-.711.526l-.332-.221a1.5 1.5 0 0 0-1.664 0l-.332.221a.47.47 0 0 1-.711-.526l.098-.326a1.5 1.5 0 0 0-.449-1.56l-.333-.291a.47.47 0 0 1 .309-.823h.234a1.5 1.5 0 0 0 1.393-.943L11.5 9a.539.539 0 0 1 1 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kr6grkbdu {
  d: path("m12 2.5l7.5 3V11c0 5-3.5 8.5-7.5 10.5c-4-2-7.5-5.5-7.5-10.5V5.5Z");
}
</style><g class="hntgybcog"><path class="kr6grkbdu"/><path class="d9wk8fbya"/></g>`,
		"fallback": "uix:team-badge",
	});
}

export default Component;
