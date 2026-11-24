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
		"content": `<style>.a8ckv3iat {
  stroke-opacity: 0.4;
  d: path("M12 6h1.5A1.5 1.5 0 0 1 15 7.5v1.125c0 2.063-1.312 3.375-3 4.125c-1.687-.75-3-2.062-3-4.125V7.5A1.5 1.5 0 0 1 10.5 6z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ulwd839td {
  d: path("M3 21h18M5 21V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14m-9 0v-2a2 2 0 1 1 4 0v2");
}
</style><g class="nrj6p8qat"><path class="a8ckv3iat"/><path class="ulwd839td"/></g>`,
		"fallback": "coolicons:police-station-alt-duocolor-round",
	});
}

export default Component;
