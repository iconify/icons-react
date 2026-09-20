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
		"content": `<style>.flblq5ico {
  d: path("m13 14 6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mbgtdkbsk {
  d: path("m16 2 -8 8h5l-8 8");
}

.zsil77j-s {
  d: path("m19 14 -6 6");
}
</style><g class="hntgybcog"><path class="mbgtdkbsk"/><path class="flblq5ico"/><path class="zsil77j-s"/></g>`,
		"fallback": "iconmind:lightning-bolt-outline-thin",
	});
}

export default Component;
