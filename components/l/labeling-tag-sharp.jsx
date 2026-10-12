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
		"content": `<style>.auo77bbyv {
  d: path("M6.75 5.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5Zm7 12.75L16 20.5l5-5");
}

.bnpgwbctb {
  d: path("M4.25 2.75h6l1.06 1.06l4.88 4.88l1.06 1.06l-1.06 1.06l-5.38 5.38l-1.06 1.06l-1.06-1.06l-4.88-4.88l-1.06-1.06v-7.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bnpgwbctb"/><path class="auo77bbyv"/></g>`,
		"fallback": "iconoven:labeling-tag-sharp",
	});
}

export default Component;
