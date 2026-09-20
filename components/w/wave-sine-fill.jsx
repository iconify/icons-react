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
		"content": `<style>.ux-778b2a {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-4.78 91.44c-16.68 35-31.06 50.56-46.65 50.56c-19.68 0-31.39-24.56-43.79-50.56C112 113 101 90 91.43 90c-3.74 0-14.37 4-32.21 41.44a8 8 0 0 1-14.44-6.88C61.46 89.59 75.84 74 91.43 74c19.68 0 31.39 24.56 43.79 50.56C144 143 155 166 164.57 166c3.74 0 14.37-4 32.21-41.44a8 8 0 1 1 14.44 6.88");
}
</style><path class="ux-778b2a"/>`,
		"fallback": "ph:wave-sine-fill",
	});
}

export default Component;
