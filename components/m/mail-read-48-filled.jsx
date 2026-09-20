import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wc-48o5lh {
  fill: currentColor;
  d: path("M21.151 4.69a6.25 6.25 0 0 1 5.698 0l13.75 7.042a6.25 6.25 0 0 1 2.605 2.51L24.002 24.35L4.834 14.176a6.25 6.25 0 0 1 2.567-2.444zM4.041 16.585q-.04.35-.041.71V33.75A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V17.295q0-.318-.032-.63L24.582 26.87a1.25 1.25 0 0 1-1.168-.002z");
}
</style><path class="wc-48o5lh"/>`,
		"fallback": "fluent:mail-read-48-filled",
	});
}

export default Component;
