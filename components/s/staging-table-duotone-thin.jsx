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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nu4hkfkzg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 8 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sx1m0u7ew {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 17v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vnmw_qj9q {
  d: path("m8 8 4 4 4 -4");
}

.yj9_d6byd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 4v11h18V4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="yj9_d6byd"/><path class="sx1m0u7ew"/><path class="nu4hkfkzg"/><path class="e4l4cb81r"/><path class="ffs26fbkv"/><path class="vnmw_qj9q"/></g>`,
		"fallback": "iconmind:staging-table-duotone-thin",
	});
}

export default Component;
