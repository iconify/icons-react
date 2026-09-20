import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ozm-eub-g {
  fill: currentColor;
  d: path("M14 9.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.01 6.515l-2.497 2.498a1.75 1.75 0 0 0 0 2.475l1.892 1.892C13.303 23.534 11.735 24 9.5 24C2 24 2 18.75 2 18.75v-.5A2.25 2.25 0 0 1 4.25 16h10.5q.132 0 .26.015M20 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m-2.217 2.778a.75.75 0 0 0-1.06-1.06L13.22 19.22a.75.75 0 0 0 0 1.06l3.502 3.503a.75.75 0 0 0 1.06-1.06l-2.22-2.223h8.878l-2.222 2.222a.75.75 0 0 0 1.06 1.061l3.503-3.503a.75.75 0 0 0 0-1.06l-3.502-3.503a.75.75 0 0 0-1.06 1.06L24.438 19H15.56z");
}
</style><path class="ozm-eub-g"/>`,
		"fallback": "fluent:people-swap-28-filled",
	});
}

export default Component;
