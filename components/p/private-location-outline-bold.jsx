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
		"content": `<style>.gn1ganbdv {
  d: path("M10.5 10a1.5 1.5 0 0 1 3 0");
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zofa9qbxh {
  d: path("M9 10h6v3H9Z");
}
</style><g class="s0phu2bbs"><path class="qad3kqbgr"/><path class="zofa9qbxh"/><path class="gn1ganbdv"/></g>`,
		"fallback": "iconmind:private-location-outline-bold",
	});
}

export default Component;
