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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ttgt51b0w {
  stroke-opacity: 0.4;
  d: path("M7 14H3V3h4z");
}

.yr7yzpbys {
  d: path("M7 14a4 4 0 0 1 4 4v1a2 2 0 1 0 4 0v-5h6v-4l-2-7H7");
}
</style><g class="nrj6p8qat"><path class="ttgt51b0w"/><path class="yr7yzpbys"/></g>`,
		"fallback": "coolicons:thumbs-down-duocolor-sharp",
	});
}

export default Component;
