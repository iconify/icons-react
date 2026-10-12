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
		"content": `<style>.gv7r76b5a {
  d: path("M4 7h7.25m4.5 0H20M4 12h2.67m9.83 0H20M4 17h2.67m8.66 0H20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ss4imzden {
  d: path("M13.5 14.5v-9");
}

.wlo8rlbpx {
  cx: 11px;
  cy: 14.5px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="gv7r76b5a"/><circle class="wlo8rlbpx"/><path class="ss4imzden"/></g>`,
		"fallback": "iconoven:sheet-music",
	});
}

export default Component;
