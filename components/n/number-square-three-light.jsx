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
		"content": `<style>.t5gytqbgm {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-52-60a34 34 0 0 1-58.29 23.79a6 6 0 0 1 8.58-8.39A22 22 0 1 0 124 126a6 6 0 0 1-4.92-9.44L140.48 86H104a6 6 0 0 1 0-12h48a6 6 0 0 1 4.92 9.44l-22.53 32.18A34.06 34.06 0 0 1 158 148");
}
</style><path class="t5gytqbgm"/>`,
		"fallback": "ph:number-square-three-light",
	});
}

export default Component;
