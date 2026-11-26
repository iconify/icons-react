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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.m9g90kbtr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11 9.5C11.8284 9.5 12.5 10.1716 12.5 11C12.5 11.8284 11.8284 12.5 11 12.5C10.1716 12.5 9.5 11.8284 9.5 11C9.5 10.1716 10.1716 9.5 11 9.5Z");
  stroke: none;
}

.msr9pk01t {
  d: path("M3 22L3 11C3 6.5817 6.5817 3 11 3L22 3M11 11L5.3431 5.3431");
}
</style><g class="gp_8x1bzb"><path class="msr9pk01t"/><path clip-rule="evenodd" class="m9g90kbtr"/></g>`,
		"fallback": "keyline-icons:square-round-corner-sharp-fill",
	});
}

export default Component;
