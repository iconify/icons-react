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
		"content": `<style>.lltdpne0m {
  d: path("M3 12a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm0 2h18M8 12v4m8-4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o5_vsyb1f {
  stroke-opacity: 0.4;
  d: path("M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2");
}
</style><g class="nrj6p8qat"><path class="o5_vsyb1f"/><path class="lltdpne0m"/></g>`,
		"fallback": "coolicons:toolbox-duocolor-round",
	});
}

export default Component;
