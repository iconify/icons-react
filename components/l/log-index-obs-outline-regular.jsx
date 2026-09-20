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
		"content": `<style>.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.jtt8g10_o {
  d: path("M9 10h6");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="nrj6p8qat"><path class="jd_dotbnq"/><path class="mfc7nxp-y"/><path class="jtt8g10_o"/><path class="zka_zabrc"/></g>`,
		"fallback": "iconmind:log-index-obs-outline-regular",
	});
}

export default Component;
