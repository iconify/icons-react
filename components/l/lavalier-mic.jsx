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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mjyvekbeh {
  width: 5.5px;
  height: 7.5px;
  x: 9.25px;
  y: 2.75px;
  rx: 2.75px;
}

.oforz1p-a {
  width: 7.5px;
  height: 4px;
  x: 8.25px;
  y: 10.25px;
  rx: 1.25px;
}

.w2wdp0bfb {
  d: path("M12 14.25v4.5a2.5 2.5 0 0 1-2.5 2.5H2.75");
}
</style><g class="hntgybcog"><rect class="mjyvekbeh"/><rect class="oforz1p-a"/><path class="w2wdp0bfb"/></g>`,
		"fallback": "iconoven:lavalier-mic",
	});
}

export default Component;
