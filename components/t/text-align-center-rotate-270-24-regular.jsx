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
		"content": `<style>.twj-fgf7h {
  fill: currentColor;
  d: path("M5.75 20a.75.75 0 0 1-.75-.75V4.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-.75.75m13-2a.75.75 0 0 1-.75-.75V6.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-.75.75m-7.25 3.25a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0z");
}
</style><path class="twj-fgf7h"/>`,
		"fallback": "fluent:text-align-center-rotate-270-24-regular",
	});
}

export default Component;
