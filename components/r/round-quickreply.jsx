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
		"content": `<style>.c-50wubap {
  fill: currentColor;
  d: path("M22 4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-7c0-.55.45-1 1-1h6z");
}

.diw9kacno {
  fill: currentColor;
  d: path("M21.69 16H20.3l1.4-3.3c.14-.33-.1-.7-.46-.7H17.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H19v3.94c0 .26.36.35.47.11l2.66-5.33a.494.494 0 0 0-.44-.72");
}
</style><path class="c-50wubap"/><path class="diw9kacno"/>`,
		"fallback": "ic:round-quickreply",
	});
}

export default Component;
