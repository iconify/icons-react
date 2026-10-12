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
		"content": `<style>.c8-onsbqt {
  d: path("M12 5.75v-2m-6.25 4.5a6.25 2.5 0 0 1 12.5 0Z");
}

.griwd2b3n {
  d: path("M6.25 13.5h-2.5m14 0h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tm6zueb9v {
  width: 11.5px;
  height: 10.5px;
  x: 6.25px;
  y: 10.75px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><path class="c8-onsbqt"/><rect class="tm6zueb9v"/><path class="griwd2b3n"/></g>`,
		"fallback": "iconoven:stockpot",
	});
}

export default Component;
