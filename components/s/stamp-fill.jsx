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
		"content": `<style>.iei2ld_3o {
  fill: currentColor;
  d: path("M224 224a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-16-96h-56.43l15.71-73.29A32 32 0 0 0 136 16h-16a32 32 0 0 0-31.28 38.71L104.43 128H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16");
}
</style><path class="iei2ld_3o"/>`,
		"fallback": "ph:stamp-fill",
	});
}

export default Component;
