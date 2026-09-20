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

.myhtxf7hg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 21v-4c-2 -2 -3 -5 -3 -8a7 7 0 0 1 14 -1c0 2 2 3 2 4s-1 1 -2 1v3a2 2 0 0 1 -2 2h-3v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p-b4m-b3j {
  d: path("M12 5 8 9h3l-4 4");
}

.pdx7buv0t {
  d: path("M6 21v-4c-2 -2 -3 -5 -3 -8a7 7 0 0 1 14 -1c0 2 2 3 2 4s-1 1 -2 1v3a2 2 0 0 1 -2 2h-3v3");
}

.yyztogc-a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 5 8 9h3l-4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="myhtxf7hg"/><path class="yyztogc-a"/><path class="pdx7buv0t"/><path class="p-b4m-b3j"/></g>`,
		"fallback": "iconmind:stress-duotone-thin",
	});
}

export default Component;
