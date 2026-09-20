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
		"content": `<style>.spqi9kylg {
  fill: currentColor;
  d: path("M9.5 7.5v3h5v-3zM8.75 1a.75.75 0 0 1 .75.75V3h7.25A2.25 2.25 0 0 1 19 5.25V14a.75.75 0 0 1-.199.509l-1.301 1.41v3.831A2.25 2.25 0 0 1 15.25 22H8.751a2.25 2.25 0 0 1-2.25-2.25v-3.832L5.2 14.508A.75.75 0 0 1 5 14V5.25A2.25 2.25 0 0 1 7.25 3H8V1.75A.75.75 0 0 1 8.75 1M8 6.75v4.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75m1.5 8c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75");
}
</style><path class="spqi9kylg"/>`,
		"fallback": "fluent:walkie-talkie-24-filled",
	});
}

export default Component;
