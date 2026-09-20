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
		"content": `<style>.c9kc-mb2p {
  d: path("m12 15 2 2 3.5 -3.5");
}

.gjpc-iboc {
  d: path("m13.5 6.5 -4 4h3l-4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}
</style><g class="s0phu2bbs"><path class="ugdbidcqi"/><path class="gjpc-iboc"/><path class="c9kc-mb2p"/></g>`,
		"fallback": "iconmind:mttr-outline-bold",
	});
}

export default Component;
