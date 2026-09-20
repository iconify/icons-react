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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pfioxebak {
  d: path("M21 4.5 13.5 12l7.5 7.5Z");
}

.q-mksftst {
  d: path("m3 4.5 7.5 7.5L3 19.5Z");
}
</style><g class="hntgybcog"><path class="q-mksftst"/><path class="pfioxebak"/></g>`,
		"fallback": "iconmind:latent-outline-thin",
	});
}

export default Component;
