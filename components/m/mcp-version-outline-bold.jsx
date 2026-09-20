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
		"content": `<style>.j6o0shbiv {
  d: path("M7 18h5");
}

.ni20md-jo {
  d: path("M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6l3 -3h3.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uesvxd39h {
  d: path("M15 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.w5th0u__p {
  d: path("m9 16 3 -3 3 3");
}

.wt9ssgbpp {
  d: path("m9 12 3 -3 3 3");
}
</style><g class="s0phu2bbs"><path class="ni20md-jo"/><path class="j6o0shbiv"/><path class="uesvxd39h"/><path class="wt9ssgbpp"/><path class="w5th0u__p"/></g>`,
		"fallback": "iconmind:mcp-version-outline-bold",
	});
}

export default Component;
