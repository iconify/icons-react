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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jjrrsabdw {
  d: path("M2 7L2.81253 8.2188C3.5544 9.3316 4.80332 10 6.14073 10H12M22 7L21.1875 8.2188C20.4456 9.33159 19.1967 10 17.8593 10H16");
}

.x9u4_etvk {
  cx: 7px;
  cy: 15px;
  r: 2px;
}

.z7l_f7r4c {
  cx: 17px;
  cy: 15px;
  r: 2px;
}
</style><g class="ipq1z-bjh"><path class="jjrrsabdw"/><circle class="x9u4_etvk"/><circle class="z7l_f7r4c"/></g>`,
		"fallback": "solar:skateboard-broken",
	});
}

export default Component;
