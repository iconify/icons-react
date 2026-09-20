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
		"content": `<style>.ffs26fbkv {
  d: path("M12 17v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mprhlt90i {
  d: path("M3 4v13h18V4Z");
}

.sgps_g3sy {
  fill: currentColor;
  d: path("M3 4v13h18V4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sutfpibts {
  fill: currentColor;
  d: path("M9 8h6v5H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wneoubc6n {
  d: path("M7 21h10");
}

.yb9iu4bmw {
  d: path("M9 8h6v5H9Z");
}
</style><g class="hntgybcog"><path class="sgps_g3sy"/><path class="sutfpibts"/><path class="mprhlt90i"/><path class="yb9iu4bmw"/><path class="ffs26fbkv"/><path class="wneoubc6n"/></g>`,
		"fallback": "iconmind:video-game-duotone-thin",
	});
}

export default Component;
