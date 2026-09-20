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
		"content": `<style>.xgiatfbln {
  fill: currentColor;
  d: path("M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-48 96h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24V96a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16");
}
</style><path class="xgiatfbln"/>`,
		"fallback": "ph:shield-plus-fill",
	});
}

export default Component;
