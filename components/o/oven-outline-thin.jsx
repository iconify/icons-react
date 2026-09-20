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
		"content": `<style>.fd_yklwbw {
  d: path("M16 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j835zw5-z {
  d: path("M3 9h18");
}

.kd8ucebka {
  d: path("M6 6h8");
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.x-e8q2nft {
  d: path("M7 12h10v6H7Z");
}
</style><g class="hntgybcog"><path class="nzpsuduik"/><path class="j835zw5-z"/><path class="kd8ucebka"/><path class="fd_yklwbw"/><path class="x-e8q2nft"/></g>`,
		"fallback": "iconmind:oven-outline-thin",
	});
}

export default Component;
