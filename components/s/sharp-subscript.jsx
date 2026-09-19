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
		"content": `<style>.hn58okmyl {
  fill: currentColor;
  d: path("M20 18v1h3v1h-4v-3h3v-1h-3v-1h4v3zM5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73z");
}
</style><path class="hn58okmyl"/>`,
		"fallback": "ic:sharp-subscript",
	});
}

export default Component;
