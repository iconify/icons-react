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
		"content": `<style>.a6l6oduar {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7v4m4-4v4M4 3h16v10l-4 4h-4l-4 4v-4H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.yjvl6lmhq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 3h16v10l-4 4h-4l-4 4v-4H4Z");
}
</style><g class="ft5dv1b6b"><path class="yjvl6lmhq"/><path class="a6l6oduar"/></g>`,
		"fallback": "coolicons:twitch-duotone",
	});
}

export default Component;
