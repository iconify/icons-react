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
		"content": `<style>.l2qqdlb9u {
  d: path("M10 7.5h4v6l-2 -2 -2 2Z");
}

.nxq7d4bsl {
  fill: currentColor;
  d: path("M10 7.5h4v6l-2 -2 -2 2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.p67gkiiyp {
  fill: currentColor;
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
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
</style><g class="s0phu2bbs"><path class="p67gkiiyp"/><path class="nxq7d4bsl"/><path class="qad3kqbgr"/><path class="l2qqdlb9u"/></g>`,
		"fallback": "iconmind:saved-location-duotone-bold",
	});
}

export default Component;
