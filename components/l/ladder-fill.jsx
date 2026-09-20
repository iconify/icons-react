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
		"content": `<style>.njssiubqn {
  fill: currentColor;
  d: path("M215.52 213.26L164.51 73l9.09-25H184a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h4.58l-60.1 165.26a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 40 224a8 8 0 0 0 7.52-5.27L57.24 192h47l-7.74 21.26a8 8 0 0 0 4.79 10.26a8.1 8.1 0 0 0 2.71.48a8 8 0 0 0 7.52-5.27L130 168h52l18.45 50.73A8 8 0 0 0 208 224a8.1 8.1 0 0 0 2.73-.48a8 8 0 0 0 4.79-10.26M109.39 64h30a8 8 0 0 1 0 16h-30a8 8 0 1 1 0-16m.86 96H80.3a8 8 0 0 1 0-16h30a8 8 0 0 1 0 16Zm14.54-40H94.84a8 8 0 0 1 0-16h30a8 8 0 0 1 0 16Zm11 32L156 96.41L176.21 152Z");
}
</style><path class="njssiubqn"/>`,
		"fallback": "ph:ladder-fill",
	});
}

export default Component;
