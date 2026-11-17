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

.tov4a25nr {
  d: path("m6 21l4-12V5l2-2l2 2v4l4 12M4 12V9h16v3");
}

.uttyj_yxy {
  stroke-opacity: 0.4;
  d: path("m9 12l3 6l3-6m-8 6h10");
}
</style><g class="nrj6p8qat"><path class="uttyj_yxy"/><path class="tov4a25nr"/></g>`,
		"fallback": "coolicons:transmission-tower-duocolor-sharp",
	});
}

export default Component;
