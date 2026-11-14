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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k_ji0cbtm {
  d: path("M4.5 4h13a2 2 0 0 1 2 2v5.5H14l-3 5v.5H4.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2");
}

.scfpo7bgk {
  d: path("m6 7.5l5 3.5l5-3.5m1.398 7.82za.546.546 0 0 1 .546-.519h.112a.546.546 0 0 1 .546.519a.96.96 0 0 0 .476.779l.029.017a.96.96 0 0 0 .913.023a.546.546 0 0 1 .722.213l.056.097a.546.546 0 0 1-.177.732a.96.96 0 0 0-.436.802v.034a.96.96 0 0 0 .436.802a.546.546 0 0 1 .177.732l-.056.097a.546.546 0 0 1-.722.213a.96.96 0 0 0-.913.023l-.029.017a.96.96 0 0 0-.476.779a.546.546 0 0 1-.546.519h-.112a.546.546 0 0 1-.546-.519a.96.96 0 0 0-.476-.779l-.029-.017a.96.96 0 0 0-.913-.023a.546.546 0 0 1-.722-.213l-.056-.097a.546.546 0 0 1 .177-.732a.96.96 0 0 0 .436-.802v-.034a.96.96 0 0 0-.436-.802a.546.546 0 0 1-.177-.732l.056-.097a.546.546 0 0 1 .722-.213a.96.96 0 0 0 .913-.023l.029-.017a.96.96 0 0 0 .476-.779");
}
</style><g class="hntgybcog"><path class="k_ji0cbtm"/><path class="scfpo7bgk"/></g>`,
		"fallback": "uix:mail-settings",
	});
}

export default Component;
