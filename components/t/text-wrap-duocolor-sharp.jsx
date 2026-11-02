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
		"content": `<style>.jps-wcf_l {
  d: path("M4 4h16M4 10h13M4 17h4");
}

.nmvep2rrm {
  stroke-opacity: 0.4;
  d: path("M17 10c4.667 0 4.667 7 0 7h-5m3-3l-3 3l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nmvep2rrm"/><path class="jps-wcf_l"/></g>`,
		"fallback": "coolicons:text-wrap-duocolor-sharp",
	});
}

export default Component;
