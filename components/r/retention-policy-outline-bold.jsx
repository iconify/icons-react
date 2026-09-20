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
		"content": `<style>.jnx-0bmel {
  d: path("M19 17h2.5");
}

.kwc83kvle {
  d: path("M16 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.p-4xkccyb {
  d: path("M2 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.q6qz5_ren {
  d: path("M19 14.5V17");
}

.r_4qgk6hg {
  d: path("M4 9h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="p-4xkccyb"/><path class="r_4qgk6hg"/><path class="kwc83kvle"/><path class="q6qz5_ren"/><path class="jnx-0bmel"/></g>`,
		"fallback": "iconmind:retention-policy-outline-bold",
	});
}

export default Component;
