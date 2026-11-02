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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ra9bqhbdv {
  stroke-opacity: 0.4;
  d: path("M12 8h4m-4 4h4");
}

.vg_nymjal {
  d: path("M4 4h16v16H4Zm4 0v16");
}
</style><g class="nrj6p8qat"><path class="ra9bqhbdv"/><path class="vg_nymjal"/></g>`,
		"fallback": "coolicons:notebook-duocolor-sharp",
	});
}

export default Component;
