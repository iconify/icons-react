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
		"content": `<style>.bk_3yib6u {
  d: path("M12 4v1.5l1.25.75");
}

.gxy44zpqi {
  d: path("M4 13.75a8 2.25 0 1 0 16 0a8 2.25 0 1 0-16 0M12 16v5m-3 0h6M8.75 5.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gxy44zpqi"/><path class="bk_3yib6u"/></g>`,
		"fallback": "uix:meeting-room-booking",
	});
}

export default Component;
