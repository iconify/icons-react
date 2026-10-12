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
		"content": `<style>.dgmhgnb8l {
  d: path("M2.75 10.5v-2h15v8h-4.5l-2.25-2l-2.25 2h-6v-3Z");
}

.rflqhgbfy {
  d: path("M20.5 2.75v18h-7v-2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dgmhgnb8l"/><path class="rflqhgbfy"/></g>`,
		"fallback": "iconoven:snorkel-sharp",
	});
}

export default Component;
