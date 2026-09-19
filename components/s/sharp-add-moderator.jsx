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
		"content": `<style>.qehegabkd {
  fill: currentColor;
  d: path("M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V20h-1v-2.5H14v-1h2.5V14h1v2.5H20z");
}

.qzn_mokls {
  fill: currentColor;
  d: path("M17 10c1.08 0 2.09.25 3 .68V5l-8-3l-8 3v6.09c0 5.05 3.41 9.76 8 10.91c.03-.01.05-.02.08-.02A7 7 0 0 1 10 17c0-3.87 3.13-7 7-7");
}
</style><path class="qzn_mokls"/><path class="qehegabkd"/>`,
		"fallback": "ic:sharp-add-moderator",
	});
}

export default Component;
