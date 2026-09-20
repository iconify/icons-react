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

.id4vqxf8c {
  d: path("m4 14 5 -5h11");
}

.qlw91sbif {
  d: path("m4 19 5 -5h4l4 4");
}
</style><g class="hntgybcog"><path class="id4vqxf8c"/><path class="qlw91sbif"/></g>`,
		"fallback": "iconmind:overfit-gap-outline-thin",
	});
}

export default Component;
