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
		"content": `<style>.ctf3frbdz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 21.25a5.75 5.75 0 0 1 11.5 0ZM12 15.5v-2.25M9.75 11L7 8.25m5 2v-4M14.25 11L17 8.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zw5t1zbyy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.75 5.5h.01M12 3h.01m7.24 2.5h.01");
}
</style><g class="ux2u0rbkq"><path class="ctf3frbdz"/><path class="zw5t1zbyy"/></g>`,
		"fallback": "iconoven:sprinkler-sharp",
	});
}

export default Component;
