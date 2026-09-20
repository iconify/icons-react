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
		"content": `<style>.azsxw4yri {
  d: path("m5 19 2.5 -2.5");
}

.cf8eb9bym {
  d: path("M18.5 12H22");
}

.g01zyvbwi {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j3rg9kqcf {
  d: path("m5 5 2.5 2.5");
}

.kg1t7rbnq {
  d: path("m19 19 -2.5 -2.5");
}

.lk3noub5u {
  d: path("m19 5 -2.5 2.5");
}

.v5srdkbdr {
  d: path("M12 2v3.5");
}

.wriot4b8j {
  d: path("M2 12h3.5");
}

.ysaawnbjv {
  d: path("M12 18.5V22");
}
</style><g class="hntgybcog"><path class="g01zyvbwi"/><path class="v5srdkbdr"/><path class="ysaawnbjv"/><path class="wriot4b8j"/><path class="cf8eb9bym"/><path class="j3rg9kqcf"/><path class="lk3noub5u"/><path class="azsxw4yri"/><path class="kg1t7rbnq"/></g>`,
		"fallback": "iconmind:sun-outline-thin",
	});
}

export default Component;
