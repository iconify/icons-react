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
		"content": `<style>.dwxi0wuau {
  fill: currentColor;
  d: path("M164.09 98.9A24 24 0 0 1 144 136h-12.37ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-34.73 10a8 8 0 0 0-11.29.75l-15.56 17.76A39.8 39.8 0 0 0 144 72H80a8 8 0 0 0 0 16h64a23.9 23.9 0 0 1 7.36 1.16l-41 46.84H80a8 8 0 0 0 0 16h16.37L66 186.73a8 8 0 0 0 12 10.54L89.63 184H176a8 8 0 0 0 0-16h-72.37l14-16H144a40 40 0 0 0 30.87-65.41L190 69.27a8 8 0 0 0-.73-11.27");
}
</style><path class="dwxi0wuau"/>`,
		"fallback": "ph:not-superset-of-fill",
	});
}

export default Component;
