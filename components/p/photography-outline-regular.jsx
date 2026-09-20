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
		"content": `<style>.atq4odb0h {
  d: path("M11 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.cvere-4lf {
  d: path("m8 15 3 -3 3 3");
}

.lts0lwvni {
  d: path("M5 6v13h13V6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ohwuksb6c {
  d: path("M8 3h13v13");
}
</style><g class="nrj6p8qat"><path class="lts0lwvni"/><path class="ohwuksb6c"/><path class="cvere-4lf"/><path class="atq4odb0h"/></g>`,
		"fallback": "iconmind:photography-outline-regular",
	});
}

export default Component;
