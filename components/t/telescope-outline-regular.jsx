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
		"content": `<style>.a6o0g3bee {
  d: path("m9 16 -4 4");
}

.bkhodo2vo {
  d: path("M5 14 15 4l4 4L9 18Z");
}

.ka41iob5n {
  d: path("m12 17 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bkhodo2vo"/><path class="a6o0g3bee"/><path class="ka41iob5n"/></g>`,
		"fallback": "iconmind:telescope-outline-regular",
	});
}

export default Component;
