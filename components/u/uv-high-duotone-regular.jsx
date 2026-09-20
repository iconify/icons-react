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
		"content": `<style>.drjad9bfe {
  d: path("M14 14v4");
}

.e6h0tjbiq {
  d: path("M8 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.f50fjsbgi {
  d: path("M19.5 3.5 17 6");
}

.gdy036bip {
  fill: currentColor;
  d: path("M8 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
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

.o8od38cnm {
  d: path("M4 18h16");
}

.tjpylcvyr {
  d: path("M18 11v7");
}

.wiboc7buh {
  d: path("M4.5 3.5 7 6");
}
</style><g class="nrj6p8qat"><path class="gdy036bip"/><path class="e6h0tjbiq"/><path class="wiboc7buh"/><path class="f50fjsbgi"/><path class="o8od38cnm"/><path class="tjpylcvyr"/><path class="drjad9bfe"/></g>`,
		"fallback": "iconmind:uv-high-duotone-regular",
	});
}

export default Component;
