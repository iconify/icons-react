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
		"content": `<style>.fbde_z08y {
  fill: currentColor;
  d: path("M3 6h10l8 8 -8 8H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.otq05mb1e {
  d: path("m9 16.5 2 -2 2 2 2 -2");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}
</style><g class="nrj6p8qat"><path class="fbde_z08y"/><path class="w3hyiobto"/><path class="otq05mb1e"/></g>`,
		"fallback": "iconmind:tag-trend-duotone-regular",
	});
}

export default Component;
