import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ypz5q6t4a {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-9.22-128l-4.19 25.14A38.8 38.8 0 0 1 124 112a36 36 0 0 1 0 72a35.54 35.54 0 0 1-25.71-10.4a8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40a19.73 19.73 0 0 0-14.29 5.6a8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16Z");
}
</style><path class="ypz5q6t4a"/>`,
		"fallback": "ph:number-circle-five",
	});
}

export default Component;
