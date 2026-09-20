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
		"content": `<style>.acyg6nb1v {
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.b6mgpfapj {
  d: path("M17 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gz7owxbeh {
  d: path("m14 10 3 3");
}

.lx87koegb {
  d: path("m10 10 -3 3");
}

.mow6v4bfc {
  d: path("M7.5 15h9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y99pnbb6w {
  d: path("M3 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="acyg6nb1v"/><path class="y99pnbb6w"/><path class="b6mgpfapj"/><path class="lx87koegb"/><path class="gz7owxbeh"/><path class="mow6v4bfc"/></g>`,
		"fallback": "iconmind:network-outline-bold",
	});
}

export default Component;
