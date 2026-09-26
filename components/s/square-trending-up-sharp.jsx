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
		"content": `<style>.au4eoobbj {
  d: path("M6.7071 14.7929L10.2 11.3L12.7 13.8L16.8828 9.6172M13 9.5L17 9.5L17 13.5");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-_5ilohg {
  d: path("M3 3L21 3L21 21L3 21L3 3Z");
}
</style><g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="au4eoobbj"/></g>`,
		"fallback": "keyline-icons:square-trending-up-sharp",
	});
}

export default Component;
