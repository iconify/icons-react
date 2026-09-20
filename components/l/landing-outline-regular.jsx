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
		"content": `<style>.eisa2cb9u {
  d: path("M2 22h20");
}

.hmmgrhbhr {
  d: path("M2 5h3V2");
}

.m8ek3-bfo {
  d: path("m12 3 2 2v4l5.5 5.5H14V17l2 2H8l2 -2v-2.5H4.5L10 9V5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o7l5jxuid {
  d: path("m2 2 3 3");
}
</style><g class="nrj6p8qat"><path class="m8ek3-bfo"/><path class="eisa2cb9u"/><path class="o7l5jxuid"/><path class="hmmgrhbhr"/></g>`,
		"fallback": "iconmind:landing-outline-regular",
	});
}

export default Component;
