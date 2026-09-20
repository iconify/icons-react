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
		"content": `<style>.ck4jde68d {
  d: path("M15 14.5h6");
}

.enb1vgbmj {
  d: path("M17 12.5v4");
}

.kdhvjfbjo {
  d: path("M15 10.5h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.ta-as8bzs {
  d: path("M19 8.5v4");
}

.v-u0ijc7h {
  d: path("M3 21a6 6 0 0 1 12 0");
}
</style><g class="nrj6p8qat"><path class="ppbx_abyw"/><path class="v-u0ijc7h"/><path class="kdhvjfbjo"/><path class="ta-as8bzs"/><path class="ck4jde68d"/><path class="enb1vgbmj"/></g>`,
		"fallback": "iconmind:user-config-outline-regular",
	});
}

export default Component;
