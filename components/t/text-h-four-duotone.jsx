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

.mze32eaaa {
  d: path("M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m104 128a8 8 0 0 1-8 8h-8v16a8 8 0 0 1-16 0v-16h-48a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 240 112v64h8a8 8 0 0 1 8 8m-32-48.68L192.36 176H224Z");
}

.sys2zvb_c {
  d: path("M248 72v120a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56h192a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="sys2zvb_c"/><path class="mze32eaaa"/></g>`,
		"fallback": "ph:text-h-four-duotone",
	});
}

export default Component;
