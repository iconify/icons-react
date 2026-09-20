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
		"content": `<style>.h67al40ex {
  d: path("M2 19h13v-4H2Z");
}

.ned58dbax {
  d: path("M16 8h6V4h-6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vffpa5rfz {
  fill: currentColor;
  d: path("M2 19h13v-4H2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wre--v3de {
  d: path("M15 17h4V8");
}

.xr0buybxj {
  fill: currentColor;
  d: path("M16 8h6V4h-6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="vffpa5rfz"/><path class="xr0buybxj"/><path class="h67al40ex"/><path class="wre--v3de"/><path class="ned58dbax"/></g>`,
		"fallback": "iconmind:treadmill-duotone-bold",
	});
}

export default Component;
