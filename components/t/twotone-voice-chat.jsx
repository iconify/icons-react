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
		"content": `<style>.btoc4bbeo {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-6-5.4l3 2.4V7l-3 2.4V7H7v6h7z");
}

.no-yzbcym {
  fill: currentColor;
  d: path("M4 17.17L5.17 16H20V4H4zM7 7h7v2.4L17 7v6l-3-2.4V13H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="no-yzbcym"/><path class="btoc4bbeo"/>`,
		"fallback": "ic:twotone-voice-chat",
	});
}

export default Component;
