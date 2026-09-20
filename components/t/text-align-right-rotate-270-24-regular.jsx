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
		"content": `<style>.qmq2a2b8x {
  fill: currentColor;
  d: path("M5.75 19a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v15.5a.75.75 0 0 1-.75.75m13-5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-.75.75m-7.25 7.25a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0z");
}
</style><path class="qmq2a2b8x"/>`,
		"fallback": "fluent:text-align-right-rotate-270-24-regular",
	});
}

export default Component;
