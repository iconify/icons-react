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
		"content": `<style>.gva7ctbcv {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM160 90H96a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-6 64h-52v-52h52Z");
}
</style><path class="gva7ctbcv"/>`,
		"fallback": "ph:square-logo-light",
	});
}

export default Component;
