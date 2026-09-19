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
		"content": `<style>.aknytnbjr {
  fill: currentColor;
  d: path("M5.01 1v22H19V1zM17 19H7V5h10zm-4.2-5.76v1.75L16 12l-3.2-2.98v1.7c-3.11.43-4.35 2.56-4.8 4.7c1.11-1.5 2.58-2.18 4.8-2.18");
}
</style><path class="aknytnbjr"/>`,
		"fallback": "ic:sharp-mobile-screen-share",
	});
}

export default Component;
