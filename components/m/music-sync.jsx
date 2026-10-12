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
		"content": `<style>.c9a429mrk {
  d: path("M19.48 8.51A8.25 8.25 0 0 0 3.75 12m16.5-7.5v4.25H16M4.52 15.49A8.25 8.25 0 0 0 20.25 12m-16.5 7.5v-4.25H8");
}

.e8o93go6n {
  cx: 10.5px;
  cy: 14.25px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.seggd438t {
  d: path("M12.25 14.25v-5.5l2 1");
}
</style><g class="hntgybcog"><path class="c9a429mrk"/><circle class="e8o93go6n"/><path class="seggd438t"/></g>`,
		"fallback": "iconoven:music-sync",
	});
}

export default Component;
