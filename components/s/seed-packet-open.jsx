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
		"content": `<style>.eppo80bzz {
  fill: currentColor;
  d: path("M17 8.5a1 1.5 0 1 0 2 0a1 1.5 0 1 0-2 0Zm2 4.5a1 1.5 0 1 0 2 0a1 1.5 0 1 0-2 0Zm-2 5a1 1.5 0 1 0 2 0a1 1.5 0 1 0-2 0Z");
}

.jvgm1hbyb {
  d: path("M3 21.5V6l2-2l2 2l2-2l2 2l2-2l1.5 1.5v16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7510wrij {
  d: path("M8.75 18v-6.5m0 2Q6 13.5 6 11q2.75 0 2.75 2.5m0 0q2.75 0 2.75-2.5q-2.75 0-2.75 2.5");
}
</style><g class="ulnmmdpxh"><path class="jvgm1hbyb"/><path class="z7510wrij"/><path class="eppo80bzz"/></g>`,
		"fallback": "uix-sharp:seed-packet-open",
	});
}

export default Component;
