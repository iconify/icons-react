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

.jp9-cujlx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 12h16v5H4Zm1 9h14m-9-9V8a2.828 2.828 0 1 1 4 0v4");
}

.piipxejpe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 12V8a2.828 2.828 0 1 1 4-4a2.83 2.83 0 0 1 0 4v4h6v5H4v-5Z");
}
</style><g class="ft5dv1b6b"><path class="piipxejpe"/><path class="jp9-cujlx"/></g>`,
		"fallback": "coolicons:stamp-duotone-sharp",
	});
}

export default Component;
