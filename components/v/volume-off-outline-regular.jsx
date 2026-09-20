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
		"content": `<style>.ggag34r5e {
  d: path("m21 9 -5 5");
}

.jmjqszbgk {
  d: path("M8 9H3v6h5l5 5V4Z");
}

.ljir_j9fp {
  d: path("m16 9 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jmjqszbgk"/><path class="ljir_j9fp"/><path class="ggag34r5e"/></g>`,
		"fallback": "iconmind:volume-off-outline-regular",
	});
}

export default Component;
