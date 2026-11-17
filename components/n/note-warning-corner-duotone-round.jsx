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
		"content": `<style>.b_qoqn6eq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4m-3 6v4m0 3h.01");
}

.ft5dv1b6b {
  fill: none;
}

.hq2ykiv-o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 8a4 4 0 0 0-4 4v8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4Z");
}
</style><g class="ft5dv1b6b"><path class="hq2ykiv-o"/><path class="b_qoqn6eq"/></g>`,
		"fallback": "coolicons:note-warning-corner-duotone-round",
	});
}

export default Component;
