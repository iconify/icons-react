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
		"content": `<style>.xt493fbfh {
  fill: currentColor;
  d: path("M7 20h10v1H7zM7 3h10v1H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.yti64cb1n {
  fill: currentColor;
  d: path("M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 8h-3V8h-2v4H8l4 4z");
}
</style><path class="xt493fbfh"/><path class="yti64cb1n"/>`,
		"fallback": "ic:twotone-system-security-update",
	});
}

export default Component;
