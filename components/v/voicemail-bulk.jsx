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
		"content": `<style>.cf28hclcm {
  d: path("M6 14h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.j-n0vnxfs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0m12 0a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><g class="cuyn6tgcc"><path class="j-n0vnxfs"/><path class="cf28hclcm"/></g>`,
		"fallback": "coolicons:voicemail-bulk",
	});
}

export default Component;
