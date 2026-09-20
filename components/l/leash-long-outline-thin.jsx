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
		"content": `<style>.gyi-tobvb {
  d: path("M20 5v14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m1k1s7nte {
  d: path("M10 12h10");
}

.ttbqujc9j {
  d: path("M7.69 8.37a4 4 0 1 1 -3.38 0");
}
</style><g class="hntgybcog"><path class="ttbqujc9j"/><path class="m1k1s7nte"/><path class="gyi-tobvb"/></g>`,
		"fallback": "iconmind:leash-long-outline-thin",
	});
}

export default Component;
