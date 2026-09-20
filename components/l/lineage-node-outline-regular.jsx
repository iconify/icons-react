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
		"content": `<style>.dfcdzc65k {
  d: path("M3 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dk00rnbir {
  d: path("m6.5 6.5 3 3");
}

.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.kdmnrabtq {
  d: path("M17 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vhsjmlbcz {
  d: path("m14.5 14.5 3 3");
}
</style><g class="nrj6p8qat"><path class="dfcdzc65k"/><path class="dk00rnbir"/><path class="enrpg0aoq"/><path class="vhsjmlbcz"/><path class="kdmnrabtq"/></g>`,
		"fallback": "iconmind:lineage-node-outline-regular",
	});
}

export default Component;
