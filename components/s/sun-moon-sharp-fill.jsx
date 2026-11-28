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

.ky1wnpblm {
  d: path("M13 5.5V1M16.889 7.111L20.071 3.929M18.5 11H23");
}

.p_zqahbdu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.343 9.343C1.897 10.79 1 12.791 1 15C1 19.418 4.582 23 9 23C13.418 23 17 19.418 17 15C17 14.448 16.552 14 16 14C15.784 14 15.573 14.07 15.4 14.2C14.708 14.719 13.865 15 13 15C10.791 15 9 13.209 9 11C9 10.135 9.281 9.292 9.8 8.6C9.93 8.427 10 8.216 10 8C10 7.448 9.552 7 9 7C6.791 7 4.79 7.896 3.343 9.343Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="p_zqahbdu"/><path class="ky1wnpblm"/></g>`,
		"fallback": "keyline-icons:sun-moon-sharp-fill",
	});
}

export default Component;
