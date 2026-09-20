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
		"content": `<style>.hb1jglb4j {
  fill: currentColor;
  d: path("M21 4.5 13.5 12l7.5 7.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pfioxebak {
  d: path("M21 4.5 13.5 12l7.5 7.5Z");
}

.pgxan_bzk {
  fill: currentColor;
  d: path("m3 4.5 7.5 7.5L3 19.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q-mksftst {
  d: path("m3 4.5 7.5 7.5L3 19.5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="pgxan_bzk"/><path class="hb1jglb4j"/><path class="q-mksftst"/><path class="pfioxebak"/></g>`,
		"fallback": "iconmind:latent-duotone-bold",
	});
}

export default Component;
