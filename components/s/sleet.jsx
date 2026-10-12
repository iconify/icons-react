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
		"content": `<style>.e5w3lvb2t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.51 13.89a3.52 3.52 0 0 1-.49-7.01a5.06 5.06 0 0 1 9.38-1.22a3.96 3.96 0 0 1-.53 8.23ZM8.5 17l-1.25 4.25M17 17l-1.25 4.25");
}

.xo54ktoll {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.75 17.5h.01m-1.01 3.25h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="e5w3lvb2t"/><path class="xo54ktoll"/></g>`,
		"fallback": "iconoven:sleet",
	});
}

export default Component;
