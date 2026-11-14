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
		"content": `<style>.hp5g1ymeh {
  d: path("M6.5 21.5V18h3v3.5");
}

.t7ek65bgo {
  d: path("m3 15l5-4.5l5 4.5v6.5H3Zm15.5 6.5v-19m-14 3h17M8 5.5v2m8.5 14h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t7ek65bgo"/><path class="hp5g1ymeh"/></g>`,
		"fallback": "uix-sharp:new-build",
	});
}

export default Component;
