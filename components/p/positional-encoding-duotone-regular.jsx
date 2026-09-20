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
		"content": `<style>.aam38ubkv {
  d: path("M14 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gslnvcq4w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 16 4 -4 4 4 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i9a2h1bww {
  fill: currentColor;
  d: path("M6 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
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

.tip34zbqw {
  d: path("M6 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.y171prxam {
  fill: currentColor;
  d: path("M14 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ynq2074_v {
  d: path("m3 16 4 -4 4 4 4 -4 4 4");
}
</style><g class="nrj6p8qat"><path class="i9a2h1bww"/><path class="y171prxam"/><path class="gslnvcq4w"/><path class="ynq2074_v"/><path class="tip34zbqw"/><path class="aam38ubkv"/></g>`,
		"fallback": "iconmind:positional-encoding-duotone-regular",
	});
}

export default Component;
