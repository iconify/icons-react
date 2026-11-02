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
		"content": `<style>.mtc0v6vtg {
  d: path("M9 4L4 6c-.604.242-1 .638-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v4a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-4a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V7c0-.362-.396-.758-1-1l-5-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t4sagtegh {
  stroke-opacity: 0.4;
  d: path("M15 4a3 3 0 0 1-6 0");
}
</style><g class="nrj6p8qat"><path class="t4sagtegh"/><path class="mtc0v6vtg"/></g>`,
		"fallback": "coolicons:shirt-duocolor-round",
	});
}

export default Component;
