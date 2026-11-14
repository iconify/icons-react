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
		"content": `<style>.husmis_cg {
  d: path("M2.5 20V5h14v15m0-15l5 4v11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xktfzwb6c {
  d: path("M2.5 12.5h14l5 2M9.5 5v15");
}
</style><g class="ulnmmdpxh"><path class="husmis_cg"/><path class="xktfzwb6c"/></g>`,
		"fallback": "uix-sharp:soccer-goal",
	});
}

export default Component;
