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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.e-n_8dpfy {
  d: path("m9 13 2 -2");
}

.gpip01bqy {
  d: path("m3 15 5 -5 5 5 5 -5 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gpip01bqy"/><path class="bod4n0b3z"/><path class="e-n_8dpfy"/></g>`,
		"fallback": "iconmind:landfill-outline-thin",
	});
}

export default Component;
