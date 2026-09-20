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
		"content": `<style>.b2998ks9l {
  d: path("m10 11 2 -2v7");
}

.n-7xnfbas {
  d: path("m12 3 7 7v4l-7 7 -7 -7v-4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="nrj6p8qat"><path class="n-7xnfbas"/><path class="b2998ks9l"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:score-outline-regular",
	});
}

export default Component;
