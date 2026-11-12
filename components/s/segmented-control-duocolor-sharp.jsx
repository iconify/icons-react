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
		"content": `<style>.ba5kewmmn {
  d: path("M3 6h18v12H3Zm14 6h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ur7h5bb6e {
  stroke-opacity: 0.4;
  d: path("M6 9h6v6H6Z");
}
</style><g class="nrj6p8qat"><path class="ur7h5bb6e"/><path class="ba5kewmmn"/></g>`,
		"fallback": "coolicons:segmented-control-duocolor-sharp",
	});
}

export default Component;
