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
		"content": `<style>.lck5_8bba {
  fill: currentColor;
  d: path("m250.73 122.63l-40-80A12 12 0 0 0 200 36H56a12 12 0 0 0-10.73 6.63l-40 80A12 12 0 0 0 4 128v56a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20v-56a12 12 0 0 0-1.27-5.37M96.58 60l8 16H83.42l-8-16Zm48 0l8 16h-21.16l-8-16Zm-41.16 56l-8-16h21.16l8 16Zm48 0l-8-16h21.16l8 16Zm48 0l-8-16h21.16l8 16Zm1.16-40h-21.16l-8-16h21.16ZM28 130.83l28-56l28 56V180H28ZM108 180v-40h120v40Z");
}
</style><path class="lck5_8bba"/>`,
		"fallback": "ph:solar-roof-bold",
	});
}

export default Component;
