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
		"content": `<style>.ldzyul-gg {
  d: path("M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm4 0h10M7 11h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vgl54wu5w {
  stroke-opacity: 0.4;
  d: path("m12 18l6-6m-1 6l1-1");
}
</style><g class="nrj6p8qat"><path class="vgl54wu5w"/><path class="ldzyul-gg"/></g>`,
		"fallback": "coolicons:textarea-duocolor-round",
	});
}

export default Component;
