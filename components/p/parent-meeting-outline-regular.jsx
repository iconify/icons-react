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
		"content": `<style>.bq0_6ubvh {
  d: path("M2 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.bsqy413qs {
  d: path("M16 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.ds7-fpf_b {
  d: path("M3 20v-5h4v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tz91nhk-p {
  d: path("M17 20v-5h4v5");
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="nrj6p8qat"><path class="x26a8iq1c"/><path class="bq0_6ubvh"/><path class="bsqy413qs"/><path class="ds7-fpf_b"/><path class="tz91nhk-p"/></g>`,
		"fallback": "iconmind:parent-meeting-outline-regular",
	});
}

export default Component;
