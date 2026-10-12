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
		"content": `<style>.avryl2bfj {
  d: path("M12 10.9c.75.85 1 1.2 1 1.5a1 1 0 0 1-2 0c0-.3.25-.65 1-1.5");
}

.d4kwlwlon {
  d: path("M5.5 2.75h13q.5 0 .5.5v1q0 .5-.5.5t-.5.5v13.5q0 .5.5.5t.5.5v1q0 .5-.5.5h-13q-.5 0-.5-.5v-1q0-.5.5-.5t.5-.5V5.25q0-.5-.5-.5t-.5-.5v-1q0-.5.5-.5M6 9h12M6 15h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d4kwlwlon"/><path class="avryl2bfj"/></g>`,
		"fallback": "iconoven:oil-barrel",
	});
}

export default Component;
