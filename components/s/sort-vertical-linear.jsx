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

.jwe4axb7c {
  d: path("M8 6L8 18M4 13.875L8 18L12 13.875");
}

.p-mwjt3jk {
  d: path("M16 18L16 6M12 10.125L16 6L20 10.125");
}
</style><g class="hntgybcog"><path class="p-mwjt3jk"/><path class="jwe4axb7c"/></g>`,
		"fallback": "solar:sort-vertical-linear",
	});
}

export default Component;
