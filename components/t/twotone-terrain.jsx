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
		"content": `<style>.ca5m24tac {
  fill: currentColor;
  d: path("m9.78 11.63l1.25 1.67L14 9.33L19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16z");
}

.dwt5d4bmq {
  fill: currentColor;
  d: path("M5 16h3.04l-1.52-2.03z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="dwt5d4bmq"/><path class="ca5m24tac"/>`,
		"fallback": "ic:twotone-terrain",
	});
}

export default Component;
