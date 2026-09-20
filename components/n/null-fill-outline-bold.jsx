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
		"content": `<style>.a6mnjib5x {
  d: path("M3 10h4");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.l8vricc3a {
  d: path("M17 10h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xedmbxbzm {
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.yngda3bvc {
  d: path("M3 15h18");
}
</style><g class="s0phu2bbs"><path class="k6nj2fbya"/><path class="a6mnjib5x"/><path class="xedmbxbzm"/><path class="l8vricc3a"/><path class="yngda3bvc"/></g>`,
		"fallback": "iconmind:null-fill-outline-bold",
	});
}

export default Component;
