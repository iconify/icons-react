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
		"content": `<style>.bfm9mmbnm {
  d: path("M16.5 12L7.5 17L7.5 7L16.5 12Z");
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
</style><g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="bfm9mmbnm"/></g>`,
		"fallback": "keyline-icons:square-caret-right-sharp",
	});
}

export default Component;
