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
		"content": `<style>.c2k5-kblh {
  d: path("M9 8v12h6V8Z");
}

.d45kg_ien {
  d: path("M10.5 8V4h3v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w7o4ylt6h {
  fill: currentColor;
  d: path("M9 8v12h6V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y29zmn0-m {
  d: path("M5 20 19 6");
}
</style><g class="nrj6p8qat"><path class="w7o4ylt6h"/><path class="c2k5-kblh"/><path class="d45kg_ien"/><path class="y29zmn0-m"/></g>`,
		"fallback": "iconmind:plastic-free-duotone-regular",
	});
}

export default Component;
