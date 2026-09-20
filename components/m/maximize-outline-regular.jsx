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
		"content": `<style>.fsv7g_bbj {
  d: path("M9 21H3v-6");
}

.l6e2wzbuh {
  d: path("M3 9V3h6");
}

.ne_b8wtyo {
  d: path("M21 15v6h-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qtj-xccdg {
  d: path("M15 3h6v6");
}
</style><g class="nrj6p8qat"><path class="l6e2wzbuh"/><path class="qtj-xccdg"/><path class="ne_b8wtyo"/><path class="fsv7g_bbj"/></g>`,
		"fallback": "iconmind:maximize-outline-regular",
	});
}

export default Component;
