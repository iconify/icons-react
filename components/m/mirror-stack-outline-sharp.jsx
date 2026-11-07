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
		"content": `<style>.d_vgzxvyz {
  fill: currentColor;
  d: path("M14 18v-2h4V4h-6v2.25h-2V2h10v16zm-8 2h6V8H6zm-2 2V6h10v16zm2-2V8zM18 4v12z");
}
</style><path class="d_vgzxvyz"/>`,
		"fallback": "material-symbols:mirror-stack-outline-sharp",
	});
}

export default Component;
