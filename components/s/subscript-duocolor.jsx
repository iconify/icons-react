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
		"content": `<style>.c8nur_b4z {
  stroke-opacity: 0.4;
  d: path("M16 17a2 2 0 1 1 4 0l-4 4h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vsru03jnb {
  d: path("m4 3l8 8m0-8l-8 8");
}
</style><g class="nrj6p8qat"><path class="c8nur_b4z"/><path class="vsru03jnb"/></g>`,
		"fallback": "coolicons:subscript-duocolor",
	});
}

export default Component;
