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
		"content": `<style>.hkl22ysul {
  d: path("M3 11v6h18v-6a2 2 0 1 0-4 0v2H7v-2a2 2 0 1 0-4 0m2 6v2m14-2v2M12 5v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.web19d79z {
  stroke-opacity: 0.4;
  d: path("M5 9V5h14v4");
}
</style><g class="nrj6p8qat"><path class="web19d79z"/><path class="hkl22ysul"/></g>`,
		"fallback": "coolicons:sofa-duocolor-sharp",
	});
}

export default Component;
