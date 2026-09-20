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

.w2o46gqyy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 2v20m-8 -6 16 -8M9 6l3 3 3 -3M9 18l3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y_0uwbqws {
  d: path("M12 2v20m-8 -6 16 -8M9 6l3 3 3 -3M9 18l3 -3 3 3");
}
</style><g class="hntgybcog"><path class="w2o46gqyy"/><path class="y_0uwbqws"/></g>`,
		"fallback": "iconmind:snowflake-duotone-thin",
	});
}

export default Component;
