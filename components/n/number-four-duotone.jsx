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

.hidfxz0es {
  d: path("M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y8fzm8okz {
  d: path("M184 160h-16V48a8 8 0 0 0-14.25-5l-96 120A8 8 0 0 0 64 176h88v32a8 8 0 0 0 16 0v-32h16a8 8 0 0 0 0-16m-32 0H80.64L152 70.81Z");
}
</style><g class="cuyn6tgcc"><path class="hidfxz0es"/><path class="y8fzm8okz"/></g>`,
		"fallback": "ph:number-four-duotone",
	});
}

export default Component;
