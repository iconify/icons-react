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
		"content": `<style>.cj7ju-wcc {
  d: path("M6 20.5V7.25q0-.75.72-.97l10.56-3.31q.72-.22.72.53v17q0 .75-.75.75H6.75q-.75 0-.75-.75m0-9h12m-6-6.87V14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r2i-aue9o {
  width: 4px;
  height: 4.25px;
  x: 10px;
  y: 17px;
  rx: 0.5px;
}
</style><g class="hntgybcog"><path class="cj7ju-wcc"/><rect class="r2i-aue9o"/></g>`,
		"fallback": "iconoven:office-tower",
	});
}

export default Component;
