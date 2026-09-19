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
		"content": `<style>.by3ac43bk {
  fill: currentColor;
  d: path("M14.5 12L6 6v12zM8 9.86L11.03 12L8 14.14zM16 6h2v12h-2z");
}

.qv3avbbbs {
  fill: currentColor;
  d: path("M8 9.86v4.28L11.03 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="qv3avbbbs"/><path class="by3ac43bk"/>`,
		"fallback": "ic:twotone-skip-next",
	});
}

export default Component;
