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
		"content": `<style>.aut8y9hmn {
  d: path("M7 12v7");
}

.bos0j4biy {
  d: path("M3 21h18");
}

.h2va4xb2x {
  d: path("M17 11v8");
}

.k6x6uv-ap {
  d: path("M12 11v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wlpa9-b1f {
  d: path("m5 11 7 -7 7 7");
}
</style><g class="s0phu2bbs"><path class="wlpa9-b1f"/><path class="aut8y9hmn"/><path class="k6x6uv-ap"/><path class="h2va4xb2x"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:museum-outline-bold",
	});
}

export default Component;
