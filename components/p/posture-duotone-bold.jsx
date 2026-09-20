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
		"content": `<style>.bv3gb0m3u {
  fill: currentColor;
  d: path("M11 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.crv4i00bu {
  d: path("M4 3v18");
}

.ma5mp6b8k {
  d: path("M11 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.q6r-ungsl {
  d: path("m10 19 4 -4 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wihdixnjz {
  d: path("M14 9v6");
}
</style><g class="s0phu2bbs"><path class="bv3gb0m3u"/><path class="crv4i00bu"/><path class="ma5mp6b8k"/><path class="wihdixnjz"/><path class="q6r-ungsl"/></g>`,
		"fallback": "iconmind:posture-duotone-bold",
	});
}

export default Component;
