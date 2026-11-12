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
		"content": `<style>.c5cjgzbpf {
  d: path("M18.2168 18.2178L21.9994 22.0004");
}

.hllyxzboc {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtutonbhb {
  d: path("M9 11.5H11.5M11.5 11.5H14M11.5 11.5V14M11.5 11.5V9");
}
</style><g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="xtutonbhb"/><path class="c5cjgzbpf"/></g>`,
		"fallback": "solar:magnifer-zoom-in-linear",
	});
}

export default Component;
