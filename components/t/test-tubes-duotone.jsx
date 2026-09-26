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
		"content": `<style>.c39760azn {
  d: path("M2 2L10 2M14 2L22 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tb5fxeb-w {
  fill: currentColor;
  d: path("M2 12L10 12L10 19C10 21.2091 8.2091 23 6 23C3.7909 23 2 21.2091 2 19ZM14 15L22 15L22 19C22 21.2091 20.2091 23 18 23C15.7909 23 14 21.2091 14 19Z");
  stroke: none;
}

.z23h2kbhj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 1L8 1C9.1046 1 10 1.8954 10 3L10 19C10 21.2091 8.2091 23 6 23C3.7909 23 2 21.2091 2 19L2 3C2 1.8954 2.8954 1 4 1ZM16 1L20 1C21.1046 1 22 1.8954 22 3L22 19C22 21.2091 20.2091 23 18 23C15.7909 23 14 21.2091 14 19L14 3C14 1.8954 14.8954 1 16 1Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="z23h2kbhj"/><path class="tb5fxeb-w"/><path class="c39760azn"/></g>`,
		"fallback": "keyline-icons:test-tubes-duotone",
	});
}

export default Component;
