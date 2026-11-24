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
		"content": `<style>.gac4cub0w {
  stroke-opacity: 0.4;
  d: path("M16 3v6m4-6v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ricnuhbyg {
  d: path("M3 5V3h6l2 5l-3 3l5 5l3-3l5 2v6h-2C10.163 21 3 13.837 3 5");
}
</style><g class="nrj6p8qat"><path class="gac4cub0w"/><path class="ricnuhbyg"/></g>`,
		"fallback": "coolicons:phone-pause-duocolor-sharp",
	});
}

export default Component;
