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
		"content": `<style>.dpjjh6qnb {
  d: path("M15 3v6h6");
}

.gsqbmignj {
  d: path("M9 3v6H3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uiel3fblr {
  d: path("M9 21v-6H3");
}

.ya5oksyke {
  d: path("M21 15h-6v6");
}
</style><g class="nrj6p8qat"><path class="gsqbmignj"/><path class="dpjjh6qnb"/><path class="ya5oksyke"/><path class="uiel3fblr"/></g>`,
		"fallback": "iconmind:minimize-outline-regular",
	});
}

export default Component;
