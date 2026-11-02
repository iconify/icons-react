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
		"content": `<style>.k-ffe5bqu {
  stroke-opacity: 0.4;
  d: path("M7 10H3v11h4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.py6rgdbwd {
  d: path("M7 10a4 4 0 0 0 4-4V5a2 2 0 1 1 4 0v5h6v4l-2 7H7");
}
</style><g class="nrj6p8qat"><path class="k-ffe5bqu"/><path class="py6rgdbwd"/></g>`,
		"fallback": "coolicons:thumbs-up-duocolor-sharp",
	});
}

export default Component;
