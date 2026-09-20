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
		"content": `<style>.cb89o3m_u {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ccgk_xb3n {
  d: path("M7 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.e1vgu1brh {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.g7y1om9dd {
  fill: currentColor;
  d: path("M7 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jotdonbiv {
  d: path("M7 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n2l08-bfj {
  d: path("M4 15.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V20a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.olhk6j3ge {
  fill: currentColor;
  d: path("M7 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w0cwozbjc {
  fill: currentColor;
  d: path("M4 15.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V20a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="cb89o3m_u"/><path class="g7y1om9dd"/><path class="w0cwozbjc"/><path class="olhk6j3ge"/><path class="e1vgu1brh"/><path class="jotdonbiv"/><path class="n2l08-bfj"/><path class="ccgk_xb3n"/></g>`,
		"fallback": "iconmind:server-duotone-thin",
	});
}

export default Component;
