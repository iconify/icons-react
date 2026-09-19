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
		"content": `<style>.ddebz39gg {
  fill: currentColor;
  d: path("M13 16c-.58 0-3-.08-3-3c0-.55-.45-1-1-1s-1 .45-1 1c0 3 1.99 5 5 5c.55 0 1-.45 1-1s-.45-1-1-1");
}

.nc823zbur {
  fill: currentColor;
  d: path("M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11m0 16c-2.76 0-5-2.24-5-5c0-4.09 3.07-9 5-9s5 4.91 5 9c0 2.76-2.24 5-5 5");
}
</style><path class="nc823zbur"/><path class="ddebz39gg"/>`,
		"fallback": "ic:outline-egg",
	});
}

export default Component;
