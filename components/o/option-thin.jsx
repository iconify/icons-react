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
		"content": `<style>.ni2_0bbvx {
  fill: currentColor;
  d: path("M228 192a4 4 0 0 1-4 4h-63.06a11.94 11.94 0 0 1-10.73-6.63L98.63 86.21A4 4 0 0 0 95.06 84H32a4 4 0 0 1 0-8h63.06a11.94 11.94 0 0 1 10.73 6.63l51.58 103.16a4 4 0 0 0 3.57 2.21H224a4 4 0 0 1 4 4M152 84h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8");
}
</style><path class="ni2_0bbvx"/>`,
		"fallback": "ph:option-thin",
	});
}

export default Component;
