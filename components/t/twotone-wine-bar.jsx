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
		"content": `<style>.hc13cabmt {
  fill: currentColor;
  d: path("M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3zm6 10c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3m4-5H8V5h8z");
}

.ylju5pbyn {
  fill: currentColor;
  d: path("M12 13c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="ylju5pbyn"/><path class="hc13cabmt"/>`,
		"fallback": "ic:twotone-wine-bar",
	});
}

export default Component;
