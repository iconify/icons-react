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
		"content": `<style>.bt921xbxy {
  d: path("M5 21a7 7 0 0 1 14 0");
}

.jr__k4bcu {
  d: path("M12 12c0 -4 3 -6 7 -6 0 4 -3 6 -7 6");
}

.km-udeb-c {
  d: path("M12 17V9");
}

.m9qgpk56l {
  d: path("M12 9c0 -4 -3 -6 -7 -6 0 4 3 6 7 6");
}

.mb1xlxdcw {
  fill: currentColor;
  d: path("M12 12c0 -4 3 -6 7 -6 0 4 -3 6 -7 6");
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

.sqthm9blp {
  fill: currentColor;
  d: path("M12 9c0 -4 -3 -6 -7 -6 0 4 3 6 7 6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="sqthm9blp"/><path class="mb1xlxdcw"/><path class="km-udeb-c"/><path class="m9qgpk56l"/><path class="jr__k4bcu"/><path class="bt921xbxy"/></g>`,
		"fallback": "iconmind:tree-planting-duotone-regular",
	});
}

export default Component;
