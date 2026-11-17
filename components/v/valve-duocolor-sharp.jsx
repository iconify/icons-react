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
		"content": `<style>.gp09fvf_p {
  stroke-opacity: 0.4;
  d: path("M12 9V5M9 5h6");
}

.kd9nj6z4x {
  d: path("M3 12h5V9h8v3h5v4h-5v3H8v-3H3zm0-2v8m18-8v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="gp09fvf_p"/><path class="kd9nj6z4x"/></g>`,
		"fallback": "coolicons:valve-duocolor-sharp",
	});
}

export default Component;
