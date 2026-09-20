import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hzwc5xbkd {
  fill: currentColor;
  d: path("M14 4.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 .75-.75M13.25 9a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0 5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm3.72-6.28a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06z");
}
</style><path class="hzwc5xbkd"/>`,
		"fallback": "fluent:text-indent-increase-rtl-20-filled",
	});
}

export default Component;
