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
		"content": `<style>.docibcbci {
  fill: currentColor;
  d: path("m4 18l8.5-6L4 6zm2-8.14L9.03 12L6 14.14zM21.5 12L13 6v12zM15 9.86L18.03 12L15 14.14z");
}

.t1ascybjk {
  fill: currentColor;
  d: path("M15 9.86v4.28L18.03 12zm-9 0v4.28L9.03 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="t1ascybjk"/><path class="docibcbci"/>`,
		"fallback": "ic:twotone-fast-forward",
	});
}

export default Component;
