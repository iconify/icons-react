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
		"content": `<style>.vxgp7bb9w {
  fill: currentColor;
  d: path("M148 40a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-176h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12m8 72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m0 72a4 4 0 0 0-4 4v24a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12v-24a4 4 0 0 0-4-4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8m0-176H48a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V48a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8");
}
</style><path class="vxgp7bb9w"/>`,
		"fallback": "ph:selection-thin",
	});
}

export default Component;
