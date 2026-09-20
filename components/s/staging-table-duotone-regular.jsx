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
		"content": `<style>.e4l4cb81r {
  d: path("M3 4v11h18V4");
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.gby_5dbxz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 4v11h18V4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m6ifjboxi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 17v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mte9rkbip {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 8 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vnmw_qj9q {
  d: path("m8 8 4 4 4 -4");
}
</style><g class="nrj6p8qat"><path class="gby_5dbxz"/><path class="m6ifjboxi"/><path class="mte9rkbip"/><path class="e4l4cb81r"/><path class="ffs26fbkv"/><path class="vnmw_qj9q"/></g>`,
		"fallback": "iconmind:staging-table-duotone-regular",
	});
}

export default Component;
