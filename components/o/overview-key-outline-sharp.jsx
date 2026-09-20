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
		"content": `<style>.lkj2ekbhp {
  fill: currentColor;
  d: path("M1.77 18V6h12v12zm1-1h10V7h-10zM17 18V6h1v12zm4.23 0V6h1v12zM2.77 17V7z");
}
</style><path class="lkj2ekbhp"/>`,
		"fallback": "material-symbols-light:overview-key-outline-sharp",
	});
}

export default Component;
