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
		"content": `<style>.fj7td4mmx {
  d: path("M5 6c.613-1.226 1.387-2 2-2h10c.613 0 1.387.774 2 2l1 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8zM4 8h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vebsodbpg {
  stroke-opacity: 0.4;
  d: path("m9 14l3 3l3-3m-3 3v-6");
}
</style><g class="nrj6p8qat"><path class="vebsodbpg"/><path class="fj7td4mmx"/></g>`,
		"fallback": "coolicons:package-download-duocolor",
	});
}

export default Component;
