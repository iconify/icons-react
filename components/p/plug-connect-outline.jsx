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
		"content": `<style>.d-2bplbvo {
  fill: currentColor;
  d: path("M7 20v-1H6q-1.25 0-2.125-.875T3 16v-3H1v-2h2V8q0-1.25.875-2.125T6 5h1V4h2v16zm-1-3h1V7H6q-.425 0-.712.288T5 8v8q0 .425.288.713T6 17m9 3v-4h-4v-2h4v-4h-4V8h4V4h2v1h1q1.25 0 2.125.875T21 8v3h2v2h-2v3q0 1.25-.875 2.125T18 19h-1v1zm2-3h1q.425 0 .713-.288T19 16V8q0-.425-.288-.712T18 7h-1zm0-5");
}
</style><path class="d-2bplbvo"/>`,
		"fallback": "material-symbols:plug-connect-outline",
	});
}

export default Component;
