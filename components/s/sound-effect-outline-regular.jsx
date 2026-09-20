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
		"content": `<style>.izng5ebil {
  d: path("M18.24 8.76a6 6 0 0 1 0 8.5");
}

.kat3by1wu {
  d: path("M16.12 10.88a3 3 0 0 1 0 4.24");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v_bqwbcfx {
  d: path("m11 5 -5 5h4l-5 5");
}
</style><g class="nrj6p8qat"><path class="v_bqwbcfx"/><path class="kat3by1wu"/><path class="izng5ebil"/></g>`,
		"fallback": "iconmind:sound-effect-outline-regular",
	});
}

export default Component;
