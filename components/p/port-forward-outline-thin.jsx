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
		"content": `<style>.c4qr3dboa {
  d: path("M2 8h10");
}

.h7bcztycq {
  d: path("M12 8v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nf735qztg {
  d: path("M12 16h10");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="y4_6s7b5v"/><path class="c4qr3dboa"/><path class="h7bcztycq"/><path class="nf735qztg"/></g>`,
		"fallback": "iconmind:port-forward-outline-thin",
	});
}

export default Component;
