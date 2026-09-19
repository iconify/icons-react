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
		"content": `<style>.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}

.scjs6m1tx {
  fill: currentColor;
  d: path("M3 3v18h18V3zm9 2.5h4.5v6H12zm-5 0h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z");
}

.wc8lgzpxx {
  fill: currentColor;
  d: path("M13.5 9H15v1.5h-1.5zm0-2.5H15V8h-1.5z");
}
</style><path class="wc8lgzpxx"/><path class="scjs6m1tx"/><path class="k4n51fjcs"/>`,
		"fallback": "ic:sharp-18mp",
	});
}

export default Component;
