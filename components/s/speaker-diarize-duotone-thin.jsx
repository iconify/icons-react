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
		"content": `<style>.eah0r8b_w {
  d: path("M19.19 3.37a4 4 0 1 1 -3.38 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nbsfmkbol {
  d: path("M8.19 3.37a4 4 0 1 1 -3.38 0");
}

.oe0l5gshl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19.19 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s9cv4hbfr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.19 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t-3ggyssa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 17 3 -3 3 3 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x2b10gplf {
  d: path("m3 17 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="s9cv4hbfr"/><path class="oe0l5gshl"/><path class="t-3ggyssa"/><path class="nbsfmkbol"/><path class="eah0r8b_w"/><path class="x2b10gplf"/></g>`,
		"fallback": "iconmind:speaker-diarize-duotone-thin",
	});
}

export default Component;
