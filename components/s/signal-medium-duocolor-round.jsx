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
		"content": `<style>.hmy55ry8s {
  d: path("M6 20v-4m4 4v-8m4 8V8");
}

.jf-xq3dua {
  stroke-opacity: 0.4;
  d: path("M18 20h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jf-xq3dua"/><path class="hmy55ry8s"/></g>`,
		"fallback": "coolicons:signal-medium-duocolor-round",
	});
}

export default Component;
