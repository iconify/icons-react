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
		"content": `<style>.azrfjy1oo {
  d: path("M14 5v3");
}

.ftj_vbckq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.go5a6nbaa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 9c0.5 4 1 8 2 11h8c1 -3 1.5 -7 2 -11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h2-rujbru {
  d: path("M10 5v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.km7m2_57e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.odlchqg5v {
  d: path("M6 9c0.5 4 1 8 2 11h8c1 -3 1.5 -7 2 -11");
}

.s9jzbjbwv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 8h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vhnbtvbtn {
  d: path("M3 8h18");
}
</style><g class="hntgybcog"><path class="go5a6nbaa"/><path class="s9jzbjbwv"/><path class="km7m2_57e"/><path class="ftj_vbckq"/><path class="odlchqg5v"/><path class="vhnbtvbtn"/><path class="h2-rujbru"/><path class="azrfjy1oo"/></g>`,
		"fallback": "iconmind:kitchen-bin-duotone-thin",
	});
}

export default Component;
