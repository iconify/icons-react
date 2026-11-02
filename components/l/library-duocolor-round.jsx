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

.p0jx8e9jq {
  d: path("M4 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm4-2v18");
}

.xn5coccyh {
  stroke-opacity: 0.4;
  d: path("m16 4l4 16l-4 1l-4-16m0 0l4-1");
}
</style><g class="nrj6p8qat"><path class="xn5coccyh"/><path class="p0jx8e9jq"/></g>`,
		"fallback": "coolicons:library-duocolor-round",
	});
}

export default Component;
