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
		"content": `<style>.nrvmphbjx {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5zm6-2h2l2-7.975V7H9v2h4z");
}
</style><path class="nrvmphbjx"/>`,
		"fallback": "material-symbols:looks-7-outline-sharp",
	});
}

export default Component;
