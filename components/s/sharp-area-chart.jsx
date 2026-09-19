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
		"content": `<style>.yjfqxnb-m {
  fill: currentColor;
  d: path("M3 13v7h18v-1.5l-9-7L8 17zm0-6l4 3l5-7l5 4h4v8.97l-9.4-7.31l-3.98 5.48L3 10.44z");
}
</style><path class="yjfqxnb-m"/>`,
		"fallback": "ic:sharp-area-chart",
	});
}

export default Component;
