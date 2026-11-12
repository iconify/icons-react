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

.k9eq3dbyp {
  d: path("M9.73242 13.2678L11.5002 11.5L13.268 9.73223");
}

.mj_6ev9oe {
  d: path("M20 20L22 22");
}
</style><g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="mj_6ev9oe"/><path class="k9eq3dbyp"/></g>`,
		"fallback": "solar:minimalistic-magnifier-slash-linear",
	});
}

export default Component;
