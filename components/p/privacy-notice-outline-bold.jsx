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
		"content": `<style>.l0zc9ibud {
  d: path("M8 10h8");
}

.moha5wbmp {
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yix-58bnj {
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
}
</style><g class="s0phu2bbs"><path class="yix-58bnj"/><path class="moha5wbmp"/><path class="l0zc9ibud"/><path class="mvm7r4bea"/></g>`,
		"fallback": "iconmind:privacy-notice-outline-bold",
	});
}

export default Component;
