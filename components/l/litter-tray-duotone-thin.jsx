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
		"content": `<style>.b1af8dhgl {
  d: path("M5 8v10h14V8");
}

.dnwronskz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 8v10h14V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ib2ejzoki {
  fill: currentColor;
  d: path("M8 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s9jzbjbwv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 8h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.teamv5bhf {
  d: path("M8 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.tyien_b-s {
  fill: currentColor;
  d: path("M14 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.yegul17ht {
  d: path("M14 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="ib2ejzoki"/><path class="tyien_b-s"/><path class="dnwronskz"/><path class="s9jzbjbwv"/><path class="b1af8dhgl"/><path class="vhnbtvbtn"/><path class="teamv5bhf"/><path class="yegul17ht"/></g>`,
		"fallback": "iconmind:litter-tray-duotone-thin",
	});
}

export default Component;
