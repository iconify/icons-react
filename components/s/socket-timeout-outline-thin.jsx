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
		"content": `<style>.gvmyg7bww {
  d: path("M2 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iyj_k-bwo {
  d: path("M12 11v4");
}

.lsfr6dm2p {
  d: path("M12 15h4");
}

.nrzizubal {
  d: path("M7 15a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.w7f0uyb3r {
  d: path("M6 5h14");
}
</style><g class="hntgybcog"><path class="gvmyg7bww"/><path class="w7f0uyb3r"/><path class="nrzizubal"/><path class="iyj_k-bwo"/><path class="lsfr6dm2p"/></g>`,
		"fallback": "iconmind:socket-timeout-outline-thin",
	});
}

export default Component;
