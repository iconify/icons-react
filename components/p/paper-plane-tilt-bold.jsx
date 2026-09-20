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
		"content": `<style>.zaclm6u0w {
  fill: currentColor;
  d: path("M230.14 25.86a20 20 0 0 0-19.57-5.11l-.22.07L18.44 79a20 20 0 0 0-3.06 37.25L99 157l40.71 83.65a19.81 19.81 0 0 0 18 11.38c.57 0 1.15 0 1.73-.07a19.82 19.82 0 0 0 17.56-14.4l58.18-191.91a1.4 1.4 0 0 0 .07-.22a20 20 0 0 0-5.11-19.57m-73.23 195.21l-34.37-70.64l46-45.95a12 12 0 0 0-17-17l-46 46l-70.61-34.39L210 46Z");
}
</style><path class="zaclm6u0w"/>`,
		"fallback": "ph:paper-plane-tilt-bold",
	});
}

export default Component;
