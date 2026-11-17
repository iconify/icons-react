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

.rq6p7wbiy {
  d: path("m6 21l4-12V6c0-.64.36-1.36 1-2a1.414 1.414 0 0 1 2 0c.64.64 1 1.36 1 2v3l4 12M4 12v-1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1");
}

.uttyj_yxy {
  stroke-opacity: 0.4;
  d: path("m9 12l3 6l3-6m-8 6h10");
}
</style><g class="nrj6p8qat"><path class="uttyj_yxy"/><path class="rq6p7wbiy"/></g>`,
		"fallback": "coolicons:transmission-tower-duocolor",
	});
}

export default Component;
