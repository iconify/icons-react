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
		"content": `<style>.hwaq4lb1r {
  fill: currentColor;
  d: path("M21.872 18.51A1 1 0 0 1 21 20H3a1 1 0 0 1-.872-1.49l9-16a1.002 1.002 0 0 1 1.744 0Z");
}
</style><path class="hwaq4lb1r"/>`,
		"fallback": "coolicons:vercel-fill-sharp",
	});
}

export default Component;
