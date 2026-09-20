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

.e8opfjb3b {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gyqkk728k {
  d: path("M3 5a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.oe2rn1bbo {
  d: path("M14 12h3");
}

.rcbpkqb4y {
  fill: currentColor;
  d: path("M17 10.5a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="e8opfjb3b"/><path class="rcbpkqb4y"/><path class="gyqkk728k"/><path class="amj4z6fup"/><path class="oe2rn1bbo"/></g>`,
		"fallback": "iconmind:rank-adapter-duotone-bold",
	});
}

export default Component;
