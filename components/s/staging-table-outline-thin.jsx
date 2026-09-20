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

.vnmw_qj9q {
  d: path("m8 8 4 4 4 -4");
}
</style><g class="hntgybcog"><path class="e4l4cb81r"/><path class="ffs26fbkv"/><path class="vnmw_qj9q"/></g>`,
		"fallback": "iconmind:staging-table-outline-thin",
	});
}

export default Component;
