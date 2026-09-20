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
		"content": `<style>.emr2ekbrp {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM168 96v64a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8");
}
</style><path class="emr2ekbrp"/>`,
		"fallback": "ph:square-logo-fill",
	});
}

export default Component;
