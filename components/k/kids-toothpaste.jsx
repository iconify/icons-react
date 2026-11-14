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
		"content": `<style>.c4hhgachg {
  d: path("m4.399 13.798l8.308-5.834l3.536 3.536l-5.834 8.309l-.354-2.475l-2.651-.531l-.531-2.651Z");
}

.l4sdud1jp {
  d: path("m12.177 7.434l3.182-3.182l4.596 4.596l-3.182 3.182ZM15.75 4.5A2.25 2.25 0 0 1 19 7.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c4hhgachg"/><path class="l4sdud1jp"/></g>`,
		"fallback": "uix-sharp:kids-toothpaste",
	});
}

export default Component;
