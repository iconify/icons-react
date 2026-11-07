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
		"content": `<style>.cbj9ckyfo {
  d: path("M3 7h10v10H3zm3-4v4m4-4v4M8 17v4");
}

.lh5e45b2c {
  stroke-opacity: 0.4;
  d: path("m20 7l-3 5h4l-3 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lh5e45b2c"/><path class="cbj9ckyfo"/></g>`,
		"fallback": "coolicons:plug-zap-duocolor-sharp",
	});
}

export default Component;
