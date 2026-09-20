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
		"content": `<style>.c6uw-ccfl {
  d: path("M7 14h10");
}

.diipsobkl {
  d: path("M5 3v18h14V3Z");
}

.n8sqmebht {
  d: path("M7 18h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pvve3lboo {
  d: path("m7 8 2 2 4 -4");
}

.ucf3ueb9q {
  fill: currentColor;
  d: path("M5 3v18h14V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="ucf3ueb9q"/><path class="diipsobkl"/><path class="pvve3lboo"/><path class="c6uw-ccfl"/><path class="n8sqmebht"/></g>`,
		"fallback": "iconmind:shopping-list-duotone-regular",
	});
}

export default Component;
