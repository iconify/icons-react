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
		"content": `<style>.g00uv-b-x {
  d: path("M4 5h9a2 2 0 0 1 2 2v3h3.5l2.5 2.5V15a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2");
}

.k2mg4f2ls {
  d: path("M15 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.koh8ckbdb {
  d: path("M5 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.un5tssbqw {
  d: path("m10 8 -2.5 2.5H10L7.5 13");
}
</style><g class="nrj6p8qat"><path class="g00uv-b-x"/><path class="koh8ckbdb"/><path class="k2mg4f2ls"/><path class="un5tssbqw"/></g>`,
		"fallback": "iconmind:same-day-delivery-outline-regular",
	});
}

export default Component;
