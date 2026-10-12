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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it3lw8bdz {
  d: path("M10.5 8V2.75h3V8");
}

.o8m0oo8cr {
  d: path("M12 12v9.25M2.75 19.5H9m6 0h6.25m-12.75-3L6.75 15m8.75 1.5l1.75-1.5");
}

.qa-awj9mj {
  width: 6.5px;
  height: 4px;
  x: 8.75px;
  y: 8px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="it3lw8bdz"/><rect class="qa-awj9mj"/><path class="o8m0oo8cr"/></g>`,
		"fallback": "iconoven:pile-driver",
	});
}

export default Component;
