import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nuxy9acud {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM7.5 5A2.5 2.5 0 0 0 5 7.5v17A2.5 2.5 0 0 0 7.5 27h17a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 24.5 5zM16 8a1 1 0 0 1 1 1v1.083A6.005 6.005 0 0 1 21.917 15H23a1 1 0 1 1 0 2h-1.083A6.005 6.005 0 0 1 17 21.917V23a1 1 0 1 1-2 0v-1.083A6.005 6.005 0 0 1 10.083 17H9a1 1 0 1 1 0-2h1.083A6.005 6.005 0 0 1 15 10.083V9a1 1 0 0 1 1-1m0 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="nuxy9acud"/>`,
		"fallback": "fluent:location-target-square-32-regular",
	});
}

export default Component;
