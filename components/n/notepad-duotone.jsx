import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.da6n1w1ru {
  d: path("M168 128a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m56-112v160a32 32 0 0 1-32 32H72a32 32 0 0 1-32-32V40a8 8 0 0 1 8-8h24v-8a8 8 0 0 1 16 0v8h32v-8a8 8 0 0 1 16 0v8h32v-8a8 8 0 0 1 16 0v8h24a8 8 0 0 1 8 8m-16 8h-16v8a8 8 0 0 1-16 0v-8h-32v8a8 8 0 0 1-16 0v-8H88v8a8 8 0 0 1-16 0v-8H56v152a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16Z");
}

.labcfzbqf {
  d: path("M208 40v160a24 24 0 0 1-24 24H72a24 24 0 0 1-24-24V40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="labcfzbqf"/><path class="da6n1w1ru"/></g>`,
		"fallback": "ph:notepad-duotone",
	});
}

export default Component;
