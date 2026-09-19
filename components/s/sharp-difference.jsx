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
		"content": `<style>.zi5gct-lp {
  fill: currentColor;
  d: path("M18 23H2V7h2v14h14zM15 1H6.01L6 19h15V7zm1.5 14h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z");
}
</style><path class="zi5gct-lp"/>`,
		"fallback": "ic:sharp-difference",
	});
}

export default Component;
