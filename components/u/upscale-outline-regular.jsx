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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s3ky5ibnb {
  d: path("M15 4h5v5");
}

.sp921pbky {
  d: path("M2 12a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.uz3lsgu5b {
  d: path("m14 10 6 -6");
}
</style><g class="nrj6p8qat"><path class="sp921pbky"/><path class="uz3lsgu5b"/><path class="s3ky5ibnb"/></g>`,
		"fallback": "iconmind:upscale-outline-regular",
	});
}

export default Component;
