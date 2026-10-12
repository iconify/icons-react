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
		"content": `<style>.b0xugtbht {
  cx: 5.5px;
  cy: 7.75px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ie5keeb-h {
  d: path("M17.25 10V6.25A3.75 3.75 0 0 1 21 10Zm-13 3h15.5a1 1 0 0 1 .97 1.24l-1.25 5.1a2.5 2.5 0 0 1-2.43 1.91H6.96a2.5 2.5 0 0 1-2.43-1.91l-1.25-5.1A1 1 0 0 1 4.25 13");
}

.s5m_i-uke {
  width: 3.5px;
  height: 6.5px;
  x: 10.75px;
  y: 3.5px;
  rx: 1px;
}
</style><g class="hntgybcog"><circle class="b0xugtbht"/><rect class="s5m_i-uke"/><path class="ie5keeb-h"/></g>`,
		"fallback": "iconoven:mutual-fund",
	});
}

export default Component;
