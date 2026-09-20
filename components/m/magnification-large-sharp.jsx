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
		"content": `<style>.yh-qo7bkq {
  fill: currentColor;
  d: path("M5.5 14.5h11v-7h-11zM3 19V5h18v14z");
}
</style><path class="yh-qo7bkq"/>`,
		"fallback": "material-symbols-light:magnification-large-sharp",
	});
}

export default Component;
