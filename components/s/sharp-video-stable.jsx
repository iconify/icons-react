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
		"content": `<style>.a0kgf0aje {
  fill: currentColor;
  d: path("M2 4v16h20V4zm2 14V6h2.95l-2.33 8.73L16.82 18zm16 0h-2.95l2.34-8.73L7.18 6H20z");
}
</style><path class="a0kgf0aje"/>`,
		"fallback": "ic:sharp-video-stable",
	});
}

export default Component;
