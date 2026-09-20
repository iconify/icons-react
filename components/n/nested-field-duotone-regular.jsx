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
		"content": `<style>.fokb-mbsz {
  d: path("M6 7h7");
}

.k-gn2j_0w {
  d: path("M8 12a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2Z");
}

.mzsthfbrb {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
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

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.xhyriwvpt {
  fill: currentColor;
  d: path("M8 12a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="mzsthfbrb"/><path class="xhyriwvpt"/><path class="nzpsuduik"/><path class="k-gn2j_0w"/><path class="fokb-mbsz"/></g>`,
		"fallback": "iconmind:nested-field-duotone-regular",
	});
}

export default Component;
