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
		"content": `<style>.hllyxzboc {
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

.mj_6ev9oe {
  d: path("M20 20L22 22");
}

.v9bhxmb2h {
  d: path("M9.73223 9.73185L11.5 11.4996M11.5 11.4996L13.2678 13.2674M11.5 11.4996L9.73223 13.2674M11.5 11.4996L13.2678 9.73185");
}
</style><g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="mj_6ev9oe"/><path class="v9bhxmb2h"/></g>`,
		"fallback": "solar:minimalistic-magnifier-close-linear",
	});
}

export default Component;
