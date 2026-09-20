import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bjwhxpbot {
  fill: currentColor;
  d: path("M10 3a1 1 0 1 1 2 0v1h3V3a1 1 0 1 1 2 0v1h3V3a1 1 0 1 1 2 0v1h1.75A3.25 3.25 0 0 1 27 7.25V21a1 1 0 0 1-.293.707l-7 7A1 1 0 0 1 19 29H8.25A3.25 3.25 0 0 1 5 25.75V7.25A3.25 3.25 0 0 1 8.25 4H10zM7 7.25v18.5c0 .69.56 1.25 1.25 1.25h9.25v-3.75A3.25 3.25 0 0 1 20.75 20H25V7.25C25 6.56 24.44 6 23.75 6H8.25C7.56 6 7 6.56 7 7.25m12.5 18.836L23.586 22H20.75c-.69 0-1.25.56-1.25 1.25zM11 10a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z");
}
</style><path class="bjwhxpbot"/>`,
		"fallback": "fluent:notepad-32-regular",
	});
}

export default Component;
