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
		"content": `<style>.dv40gzb0l {
  d: path("M3 5h5v5h5v5h5v5h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n9z8gubzo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h5v5h5v5h5v5h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="n9z8gubzo"/><path class="dv40gzb0l"/></g>`,
		"fallback": "iconmind:learning-rate-duotone-thin",
	});
}

export default Component;
