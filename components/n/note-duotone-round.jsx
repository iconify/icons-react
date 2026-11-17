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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ifj1jkb8e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 20H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v5m0 0l-7 7m0 0v-5a2 2 0 0 1 2-2h5");
}

.mp-631bha {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m20 13l-.034.034q.01-.01.004-.022a.02.02 0 0 0-.018-.012H15a2 2 0 0 0-2 1.999v4.953a.02.02 0 0 0 .012.018q.013.006.022-.004L13 20H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4Z");
}
</style><g class="ft5dv1b6b"><path class="mp-631bha"/><path class="ifj1jkb8e"/></g>`,
		"fallback": "coolicons:note-duotone-round",
	});
}

export default Component;
