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
		"content": `<style>.a1-b9_bdl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 2 -8 8h5l-8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.flblq5ico {
  d: path("m13 14 6 6");
}

.g4fb1zbjj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13 14 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k15p1lb3a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m19 14 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mbgtdkbsk {
  d: path("m16 2 -8 8h5l-8 8");
}

.zsil77j-s {
  d: path("m19 14 -6 6");
}
</style><g class="hntgybcog"><path class="a1-b9_bdl"/><path class="g4fb1zbjj"/><path class="k15p1lb3a"/><path class="mbgtdkbsk"/><path class="flblq5ico"/><path class="zsil77j-s"/></g>`,
		"fallback": "iconmind:lightning-bolt-duotone-thin",
	});
}

export default Component;
