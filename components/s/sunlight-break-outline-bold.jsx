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
		"content": `<style>.ennto9b9x {
  d: path("M16 16h5");
}

.kt4kzrb6r {
  d: path("M5 21V4h8v17");
}

.nvn647bwx {
  d: path("M10 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.p7tekpb9x {
  d: path("M16 8h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tea8p3bbk {
  d: path("M16 12h5");
}
</style><g class="s0phu2bbs"><path class="kt4kzrb6r"/><path class="nvn647bwx"/><path class="p7tekpb9x"/><path class="tea8p3bbk"/><path class="ennto9b9x"/></g>`,
		"fallback": "iconmind:sunlight-break-outline-bold",
	});
}

export default Component;
