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
		"content": `<style>.lb2m62zlj {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm3.5-3.5h7v-1h-7zm0-4h11v-1h-11z");
}
</style><path class="lb2m62zlj"/>`,
		"fallback": "material-symbols-light:topic-sharp",
	});
}

export default Component;
