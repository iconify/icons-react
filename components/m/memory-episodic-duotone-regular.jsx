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
		"content": `<style>.be1u5t58a {
  d: path("M6 8h14");
}

.h50arts9k {
  d: path("M6 12h10");
}

.iwtx-zb1w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ojg4edcfp {
  d: path("M6 16h14");
}

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.whi97e70a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 8h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ysg0l7y-h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 16h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="whi97e70a"/><path class="iwtx-zb1w"/><path class="ysg0l7y-h"/><path class="r3faxubne"/><path class="be1u5t58a"/><path class="h50arts9k"/><path class="ojg4edcfp"/></g>`,
		"fallback": "iconmind:memory-episodic-duotone-regular",
	});
}

export default Component;
