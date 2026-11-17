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

.wugd8kz0k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 10v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6L5 4c-.369-.369-.369-1 0-1h9a2 2 0 0 1 2 2zm0-3h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2M6 21h12");
}

.yulrr8b_a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 5v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6L5 4c-.369-.369-.369-1 0-1h9a2 2 0 0 1 2 2");
}
</style><g class="ft5dv1b6b"><path class="yulrr8b_a"/><path class="wugd8kz0k"/></g>`,
		"fallback": "coolicons:kettle-duotone",
	});
}

export default Component;
