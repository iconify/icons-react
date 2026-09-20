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
		"content": `<style>.amj4z6fup {
  d: path("M17 10.5a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}

.gyqkk728k {
  d: path("M3 5a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oe2rn1bbo {
  d: path("M14 12h3");
}
</style><g class="hntgybcog"><path class="gyqkk728k"/><path class="amj4z6fup"/><path class="oe2rn1bbo"/></g>`,
		"fallback": "iconmind:rank-adapter-outline-thin",
	});
}

export default Component;
