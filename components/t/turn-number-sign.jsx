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
		"content": `<style>.g5xvcibsn {
  d: path("M9 11.5V8h5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6efper6p {
  d: path("M8.5 2.5h7A3.5 3.5 0 0 1 19 6v5a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 11V6a3.5 3.5 0 0 1 3.5-3.5m3.5 12v7");
}

.qwk9a26js {
  d: path("m12.5 6l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="k6efper6p"/><path class="g5xvcibsn"/><path class="qwk9a26js"/></g>`,
		"fallback": "uix:turn-number-sign",
	});
}

export default Component;
