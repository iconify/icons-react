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
		"content": `<style>.md3qg6xkk {
  d: path("M4 6v12");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wvee1b7zr {
  d: path("M8 15h12");
}
</style><g class="s0phu2bbs"><path class="md3qg6xkk"/><path class="pty_wsbvs"/><path class="wvee1b7zr"/></g>`,
		"fallback": "iconmind:type-action-outline-bold",
	});
}

export default Component;
