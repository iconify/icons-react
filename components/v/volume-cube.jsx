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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysktjc-qn {
  d: path("m12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5Z");
}

.znd7msbjk {
  d: path("M3.5 7.25L12 12l8.5-4.75M12 12v9.5");
}
</style><g class="ulnmmdpxh"><path class="ysktjc-qn"/><path class="znd7msbjk"/></g>`,
		"fallback": "uix-sharp:volume-cube",
	});
}

export default Component;
