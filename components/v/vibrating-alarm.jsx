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
		"content": `<style>.elae33b4p {
  cx: 12px;
  cy: 13.5px;
  r: 6.25px;
}

.hm5vneepa {
  d: path("M12 10.25v3.25l2 1.5m-6 3.25L6.5 20.5m9.5-2.25l1.5 2.25M6.25 6.5L8.5 4.25m9.25 2.25L15.5 4.25M3.75 8.5l-1 1.5l1 1.5l-1 1.5l1 1.5m16.5-6l1 1.5l-1 1.5l1 1.5l-1 1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="elae33b4p"/><path class="hm5vneepa"/></g>`,
		"fallback": "iconoven:vibrating-alarm",
	});
}

export default Component;
