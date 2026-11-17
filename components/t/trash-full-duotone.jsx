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

.kxy0b4b8b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 6h12v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm3 4v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0m4 0v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0");
}

.wjfks33vt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6M4 6h16M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m-6 4v7m4-7v7");
}
</style><g class="ft5dv1b6b"><path class="kxy0b4b8b"/><path class="wjfks33vt"/></g>`,
		"fallback": "coolicons:trash-full-duotone",
	});
}

export default Component;
