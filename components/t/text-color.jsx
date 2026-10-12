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
		"content": `<style>.gkctxob2o {
  width: 17.5px;
  height: 3.5px;
  x: 3.25px;
  y: 17.5px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nw5260bys {
  d: path("M6.5 15L12 3.75L17.5 15m-9-4h7");
}
</style><g class="hntgybcog"><path class="nw5260bys"/><rect class="gkctxob2o"/></g>`,
		"fallback": "iconoven:text-color",
	});
}

export default Component;
