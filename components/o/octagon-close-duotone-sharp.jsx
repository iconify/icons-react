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
		"content": `<style>.a0pmvabzr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 3h4l5 5v8l-5 5H8l-5-5V8l5-5Z");
}

.ft5dv1b6b {
  fill: none;
}

.ja5o24bac {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h4l5 5v8l-5 5H8l-5-5V8l5-5zM9 9l6 6m0-6l-6 6");
}
</style><g class="ft5dv1b6b"><path class="a0pmvabzr"/><path class="ja5o24bac"/></g>`,
		"fallback": "coolicons:octagon-close-duotone-sharp",
	});
}

export default Component;
