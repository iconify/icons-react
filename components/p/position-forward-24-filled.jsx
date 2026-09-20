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
		"content": `<style>.cnnbenb4w {
  fill: currentColor;
  d: path("M13.25 16.5a3.25 3.25 0 0 0 3.25-3.25v-8A3.25 3.25 0 0 0 13.25 2h-8A3.25 3.25 0 0 0 2 5.25v8a3.25 3.25 0 0 0 3.25 3.25zm-5.75 1H9v1.25c0 .966.784 1.75 1.75 1.75h8a1.75 1.75 0 0 0 1.75-1.75v-8A1.75 1.75 0 0 0 18.75 9H17.5V7.5h1.25A3.25 3.25 0 0 1 22 10.75v8A3.25 3.25 0 0 1 18.75 22h-8a3.25 3.25 0 0 1-3.25-3.25z");
}
</style><path class="cnnbenb4w"/>`,
		"fallback": "fluent:position-forward-24-filled",
	});
}

export default Component;
