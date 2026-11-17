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
		"content": `<style>.b80amb8cd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 9V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3Z");
}

.ft5dv1b6b {
  fill: none;
}

.t26s1cb4z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 3h16");
}
</style><g class="ft5dv1b6b"><path class="b80amb8cd"/><path class="t26s1cb4z"/></g>`,
		"fallback": "coolicons:panel-top-duotone",
	});
}

export default Component;
