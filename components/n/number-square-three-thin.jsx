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
		"content": `<style>.hfj_mm00a {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-56-60a32 32 0 0 1-54.86 22.4a4 4 0 1 1 5.72-5.6A24 24 0 1 0 124 124a4 4 0 0 1-3.28-6.29L144.32 84H104a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29l-24.16 34.51A32.06 32.06 0 0 1 156 148");
}
</style><path class="hfj_mm00a"/>`,
		"fallback": "ph:number-square-three-thin",
	});
}

export default Component;
