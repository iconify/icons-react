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
		"content": `<style>.dldnhmbjp {
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kt8ta-bfj {
  d: path("M12 7.25V12l-3 2m9 .5v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="dldnhmbjp"/><path class="kt8ta-bfj"/></g>`,
		"fallback": "iconoven:overtime",
	});
}

export default Component;
