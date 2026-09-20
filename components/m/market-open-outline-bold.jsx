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
		"content": `<style>.gyu499fcn {
  d: path("M12 6v2.5");
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.ja-d7-b4a {
  d: path("M6 17a6 6 0 0 1 12 0");
}

.k4y331wag {
  d: path("m4.5 9.5 2 2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xdvtlk8qz {
  d: path("m19.5 9.5 -2 2");
}
</style><g class="s0phu2bbs"><path class="ja-d7-b4a"/><path class="ic_pehd5a"/><path class="gyu499fcn"/><path class="k4y331wag"/><path class="xdvtlk8qz"/></g>`,
		"fallback": "iconmind:market-open-outline-bold",
	});
}

export default Component;
