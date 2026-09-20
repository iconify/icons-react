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
		"content": `<style>.ajea6vpsn {
  d: path("m9 10 -2 2 2 2");
}

.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i7-hwrk0u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.sxll69axz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 10 2 2 -2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tuynf1bdi {
  d: path("m15 10 2 2 -2 2");
}

.uxyzhxvwz {
  d: path("M7 12h10");
}

.vl0iwtbma {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 10 -2 2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ws1d0fbts {
  d: path("M20 4v16");
}

.x7ap30bft {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="i7-hwrk0u"/><path class="x7ap30bft"/><path class="vl0iwtbma"/><path class="sxll69axz"/><path class="r3faxubne"/><path class="ws1d0fbts"/><path class="uxyzhxvwz"/><path class="ajea6vpsn"/><path class="tuynf1bdi"/></g>`,
		"fallback": "iconmind:spacing-duotone-thin",
	});
}

export default Component;
