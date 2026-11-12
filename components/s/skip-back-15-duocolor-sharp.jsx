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
		"content": `<style>.a44obwemu {
  d: path("M20 8A8.944 8.944 0 0 0 4 8m4 0H4V4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ylk0v3brf {
  stroke-opacity: 0.4;
  d: path("m6 15l2-2v8m10-8h-6v4h2c2 0 4 0 4 2s-2 2-4 2h-2");
}
</style><g class="nrj6p8qat"><path class="ylk0v3brf"/><path class="a44obwemu"/></g>`,
		"fallback": "coolicons:skip-back-15-duocolor-sharp",
	});
}

export default Component;
