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
		"content": `<style>.b_5y93rik {
  d: path("m12 8.5 3.5 3.5 -3.5 3.5L8.5 12Z");
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.xucfzr8ng {
  d: path("M3 12h4");
}

.zy54a7bml {
  d: path("M17 12h4");
}
</style><g class="hntgybcog"><path class="b_5y93rik"/><path class="xucfzr8ng"/><path class="zy54a7bml"/><path class="i2-ny_bzf"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:transit-gateway-outline-thin",
	});
}

export default Component;
