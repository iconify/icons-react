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
		"content": `<style>.hv57c-b0i {
  d: path("M4 8a8.944 8.944 0 1 1 16 8A8.944 8.944 0 0 1 4 8m4 6a4.472 4.472 0 1 1 8 0");
}

.kxq47ab9r {
  stroke-opacity: 0.4;
  d: path("M12 16h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="kxq47ab9r"/><path class="hv57c-b0i"/></g>`,
		"fallback": "coolicons:robot-vacuum-duocolor-sharp",
	});
}

export default Component;
