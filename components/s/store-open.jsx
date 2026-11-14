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

.hr04v9bok {
  d: path("m3 6.5l1.5-4h15l1.5 4M4.5 9v12.5h15V9");
}

.mdmxi1yng {
  fill: currentColor;
  d: path("M11.5 15h1a1.5 1.5 0 0 1 1.5 1.5v.25a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-.25a1.5 1.5 0 0 1 1.5-1.5");
}

.ymo_d4btp {
  d: path("M3 6.5a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0m-13.75 15v-9.25h9.5v9.25");
}
</style><g class="hntgybcog"><path class="hr04v9bok"/><path class="ymo_d4btp"/><path class="mdmxi1yng"/></g>`,
		"fallback": "uix:store-open",
	});
}

export default Component;
