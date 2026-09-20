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

.kvejgacvr {
  d: path("M15 9h7l-2 2v8h-3v-8Z");
}

.ldkstzszf {
  d: path("M3 16h11");
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.qnmmmsbha {
  d: path("M3 11h11");
}

.vbtq08bny {
  fill: currentColor;
  d: path("M15 9h7l-2 2v8h-3v-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="vbtq08bny"/><path class="nrqy16b7j"/><path class="qnmmmsbha"/><path class="ldkstzszf"/><path class="kvejgacvr"/></g>`,
		"fallback": "iconmind:list-filter-duotone-thin",
	});
}

export default Component;
