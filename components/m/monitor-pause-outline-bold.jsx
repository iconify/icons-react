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
		"content": `<style>.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.m7p35uguv {
  d: path("M12 17v3");
}

.otc8vqhvu {
  d: path("M14 7.5v6");
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u_hc6wvhi {
  d: path("M10 7.5v6");
}
</style><g class="s0phu2bbs"><path class="jq9hovbrs"/><path class="m7p35uguv"/><path class="qdn88l2uv"/><path class="u_hc6wvhi"/><path class="otc8vqhvu"/></g>`,
		"fallback": "iconmind:monitor-pause-outline-bold",
	});
}

export default Component;
