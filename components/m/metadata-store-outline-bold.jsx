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
		"content": `<style>.bytzq2hdx {
  d: path("M6 13h4");
}

.mdjih2src {
  d: path("M6 17h4");
}

.q0ladwbck {
  d: path("M14 13h4");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.udhsi7cci {
  d: path("M14 17h4");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="vyks9vbfn"/><path class="rw6ho_bav"/><path class="bytzq2hdx"/><path class="q0ladwbck"/><path class="mdjih2src"/><path class="udhsi7cci"/></g>`,
		"fallback": "iconmind:metadata-store-outline-bold",
	});
}

export default Component;
