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

.mhlsn304v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 12v7l-7 2h-4l-7-2V5l7-2h4l7 2zM6 7h.01M12 3v18");
}

.yuap3bc9a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m21 19l-7 2h-4l-7-2V5l7-2h4l7 2Z");
}
</style><g class="ft5dv1b6b"><path class="yuap3bc9a"/><path class="mhlsn304v"/></g>`,
		"fallback": "coolicons:mobile-foldable-duotone",
	});
}

export default Component;
