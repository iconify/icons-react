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
		"content": `<style>.j8utnip8g {
  fill: currentColor;
  d: path("M2 16 16 2l6 6L8 22Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m8h6hlbgk {
  d: path("m5 13 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uux3anbrn {
  d: path("m9 9 3 3");
}

.xvabp0bhv {
  d: path("M2 16 16 2l6 6L8 22Z");
}

.yyqghmoaf {
  d: path("m13 5 3 3");
}
</style><g class="s0phu2bbs"><path class="j8utnip8g"/><path class="xvabp0bhv"/><path class="m8h6hlbgk"/><path class="uux3anbrn"/><path class="yyqghmoaf"/></g>`,
		"fallback": "iconmind:school-ruler-duotone-bold",
	});
}

export default Component;
