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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.igmg-eblr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 15v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1Z");
}

.tjh72-f0i {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm0 7h16");
}
</style><g class="ft5dv1b6b"><path class="igmg-eblr"/><path class="tjh72-f0i"/></g>`,
		"fallback": "coolicons:panel-bottom-duotone-round",
	});
}

export default Component;
