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
		"content": `<style>.y16uqniie {
  fill: currentColor;
  d: path("M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v20H36V56a4 4 0 0 1 4-4m176 152H40a4 4 0 0 1-4-4V84h184v116a4 4 0 0 1-4 4m-44-92a44 44 0 0 1-88 0a4 4 0 0 1 8 0a36 36 0 0 0 72 0a4 4 0 0 1 8 0");
}
</style><path class="y16uqniie"/>`,
		"fallback": "ph:shopping-bag-open-thin",
	});
}

export default Component;
