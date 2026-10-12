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

.mlqk6dbfd {
  cx: 18px;
  cy: 18px;
  r: 2.75px;
}

.ovsex995p {
  d: path("M18 15.25q0-2.25 2.25-3");
}

.za-8hgbdf {
  d: path("M8.25 2.75h3.5v3.5l2 2.75v10.5A1.75 1.75 0 0 1 12 21.25H8a1.75 1.75 0 0 1-1.75-1.75V9l2-2.75Zm0 2.25h3.5");
}
</style><g class="hntgybcog"><path class="za-8hgbdf"/><circle class="mlqk6dbfd"/><path class="ovsex995p"/></g>`,
		"fallback": "iconoven:olive-oil-bottle",
	});
}

export default Component;
