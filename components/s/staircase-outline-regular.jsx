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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sb40gqbga {
  d: path("M3 21v-4h5v-4h5V9h5V5h3");
}
</style><g class="nrj6p8qat"><path class="sb40gqbga"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:staircase-outline-regular",
	});
}

export default Component;
