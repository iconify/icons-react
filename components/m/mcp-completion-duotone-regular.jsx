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
		"content": `<style>.ih1rjkyad {
  d: path("M13.5 3H18a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V6l3 -3h4.5");
}

.nl66y9men {
  d: path("M6 16h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3n2etw4t {
  d: path("M6 20h9");
}

.p81_tgbpt {
  fill: currentColor;
  d: path("M13.5 3H18a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V6l3 -3h4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="p81_tgbpt"/><path class="ih1rjkyad"/><path class="nl66y9men"/><path class="o3n2etw4t"/></g>`,
		"fallback": "iconmind:mcp-completion-duotone-regular",
	});
}

export default Component;
