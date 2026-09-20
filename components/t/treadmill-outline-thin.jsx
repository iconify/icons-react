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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ned58dbax {
  d: path("M16 8h6V4h-6Z");
}

.wre--v3de {
  d: path("M15 17h4V8");
}
</style><g class="hntgybcog"><path class="h67al40ex"/><path class="wre--v3de"/><path class="ned58dbax"/></g>`,
		"fallback": "iconmind:treadmill-outline-thin",
	});
}

export default Component;
