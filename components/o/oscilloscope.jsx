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

.ra3nu2bqt {
  d: path("M6 11c1.5-4 3.5-4 5 0s3.5 4 5 0M8 21h.01M12 21h.01M16 21h.01");
}

.wu99i9_1c {
  d: path("M6.5 3.5h11A3.5 3.5 0 0 1 21 7v8a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 15V7a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="wu99i9_1c"/><path class="ra3nu2bqt"/></g>`,
		"fallback": "uix:oscilloscope",
	});
}

export default Component;
