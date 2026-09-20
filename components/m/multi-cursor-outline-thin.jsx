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
		"content": `<style>.d223d_x9q {
  d: path("M3 12h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.l517yxbln {
  d: path("M12 9v6");
}

.uxy9sxbfx {
  d: path("M3 19h10");
}

.z5zbrh5-r {
  d: path("M16 16v6");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="d223d_x9q"/><path class="l517yxbln"/><path class="uxy9sxbfx"/><path class="z5zbrh5-r"/></g>`,
		"fallback": "iconmind:multi-cursor-outline-thin",
	});
}

export default Component;
