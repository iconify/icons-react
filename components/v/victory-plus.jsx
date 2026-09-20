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
		"content": `<style>.bvolmwboi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.99 18.204l4.714-4.933l-.225-.363h-8.73c-3.212 3.358-6.484 6.658-9.667 10.043l-1.08 1.149h-.279l-.106-11.092H5.525l-.025.4l2.723 1.658l.104 20.026h7.544q8.066-8.439 16.12-16.888Zm4.851-1.678h3.749l-2.334 5.093H42.5l-2.688 6.013H35.64l-2.193 4.88h-5.659");
}
</style><path class="bvolmwboi"/>`,
		"fallback": "arcticons:victory-plus",
	});
}

export default Component;
