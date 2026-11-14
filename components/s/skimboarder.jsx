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
		"content": `<style>.bkt517b4s {
  d: path("M12 6.5V14l-4 5.5m4-5.5l4 5.5m-13 0h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jenr3ybjg {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-6.5 5h17");
}
</style><g class="hntgybcog"><path class="jenr3ybjg"/><path class="bkt517b4s"/></g>`,
		"fallback": "uix:skimboarder",
	});
}

export default Component;
