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
		"content": `<style>.mqi2_ac9e {
  d: path("M9.5 15.5 12 18l2.5 -2.5");
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

.r5bn6xbek {
  d: path("m9.5 11 2.5 2.5 2.5 -2.5");
}

.vhnbtvbtn {
  d: path("M3 8h18");
}
</style><g class="nrj6p8qat"><path class="mzsthfbrb"/><path class="nzpsuduik"/><path class="vhnbtvbtn"/><path class="r5bn6xbek"/><path class="mqi2_ac9e"/></g>`,
		"fallback": "iconmind:page-scroll-duotone-regular",
	});
}

export default Component;
