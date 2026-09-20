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
		"content": `<style>.a46bghb1i {
  d: path("M18 10v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oscmqi7_r {
  d: path("M2 19V9l2 -2h6l2 2v10");
}

.qvtmo6b3b {
  d: path("M15 13h6");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="oscmqi7_r"/><path class="z9ittvbis"/><path class="qvtmo6b3b"/><path class="a46bghb1i"/></g>`,
		"fallback": "iconmind:tab-new-outline-regular",
	});
}

export default Component;
