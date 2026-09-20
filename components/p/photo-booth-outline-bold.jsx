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
		"content": `<style>.guo-qbwvt {
  d: path("M8 3v13c0 2 4 2 4 0V3");
}

.q686vz2zk {
  d: path("M14 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uk66x15py {
  d: path("M4 3v18h16V3Z");
}
</style><g class="s0phu2bbs"><path class="uk66x15py"/><path class="guo-qbwvt"/><path class="q686vz2zk"/></g>`,
		"fallback": "iconmind:photo-booth-outline-bold",
	});
}

export default Component;
