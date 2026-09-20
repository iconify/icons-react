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
		"content": `<style>.b2qqu0b4z {
  d: path("m12 13 2 2 -2 2 -2 -2Z");
}

.cdburb7gi {
  fill: currentColor;
  d: path("m12 13 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d1zyr9bfc {
  d: path("M12 4v4");
}

.d8r3zz4mr {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j534ltbcb {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.m1mjigbsi {
  d: path("M4 8h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="d8r3zz4mr"/><path class="cdburb7gi"/><path class="j534ltbcb"/><path class="m1mjigbsi"/><path class="d1zyr9bfc"/><path class="b2qqu0b4z"/></g>`,
		"fallback": "iconmind:recommended-product-duotone-bold",
	});
}

export default Component;
