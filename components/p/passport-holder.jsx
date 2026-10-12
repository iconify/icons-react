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

.hykc5jobm {
  d: path("M6.25 5.75v-1a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11.5a2 2 0 0 1-2 2h-1");
}

.iuezypbwi {
  width: 15px;
  height: 15.5px;
  x: 3.25px;
  y: 5.75px;
  rx: 2px;
}

.wikxb8b7l {
  d: path("M6.25 10.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 6h4.5m7.5-5.75h-2a2 2 0 0 0 0 4h2Z");
}
</style><g class="hntgybcog"><path class="hykc5jobm"/><rect class="iuezypbwi"/><path class="wikxb8b7l"/></g>`,
		"fallback": "iconoven:passport-holder",
	});
}

export default Component;
