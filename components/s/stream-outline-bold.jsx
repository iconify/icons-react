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
		"content": `<style>.jtrmczbpr {
  d: path("M2 6h14");
}

.n_hih6bwb {
  d: path("M2 18h14");
}

.n6amu-bmd {
  d: path("M8 12h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jtrmczbpr"/><path class="n6amu-bmd"/><path class="n_hih6bwb"/></g>`,
		"fallback": "iconmind:stream-outline-bold",
	});
}

export default Component;
