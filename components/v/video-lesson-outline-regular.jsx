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
		"content": `<style>.agv117egc {
  d: path("M2 11a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.dx_oex_yx {
  d: path("m15 9 4 -4");
}

.in03m4f8p {
  d: path("m2 9 4 -4h16v4");
}

.mn7zxg3cy {
  d: path("m9 9 4 -4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="agv117egc"/><path class="in03m4f8p"/><path class="mn7zxg3cy"/><path class="dx_oex_yx"/></g>`,
		"fallback": "iconmind:video-lesson-outline-regular",
	});
}

export default Component;
