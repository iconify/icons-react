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
		"content": `<style>.ckawxab4i {
  d: path("m4 11 8 -8 8 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ujkepejes {
  d: path("m6 12 6 6 6 -6");
}

.zr5lbkq8n {
  d: path("M4 11v10h16V11");
}
</style><g class="hntgybcog"><path class="ckawxab4i"/><path class="zr5lbkq8n"/><path class="ujkepejes"/></g>`,
		"fallback": "iconmind:mail-open-outline-thin",
	});
}

export default Component;
