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
		"content": `<style>.q8zcidbcn {
  fill: currentColor;
  d: path("M90 64a6 6 0 0 1 6-6h120a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m126 58H96a6 6 0 0 0 0 12h120a6 6 0 0 0 0-12m0 64H96a6 6 0 0 0 0 12h120a6 6 0 0 0 0-12M56 58H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12");
}
</style><path class="q8zcidbcn"/>`,
		"fallback": "ph:list-dashes-light",
	});
}

export default Component;
