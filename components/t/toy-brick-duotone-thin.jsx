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
		"content": `<style>.ab48ccc0f {
  d: path("M4 9v10h16V9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k311anbdb {
  d: path("M14 9V6h3v3");
}

.q3if5di8r {
  fill: currentColor;
  d: path("M4 9v10h16V9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u3mqizjgw {
  d: path("M7 9V6h3v3");
}
</style><g class="hntgybcog"><path class="q3if5di8r"/><path class="ab48ccc0f"/><path class="u3mqizjgw"/><path class="k311anbdb"/></g>`,
		"fallback": "iconmind:toy-brick-duotone-thin",
	});
}

export default Component;
