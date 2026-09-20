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
		"content": `<style>.fe4atgbub {
  fill: currentColor;
  d: path("M200 170a30.05 30.05 0 0 0-29.4 24H72a34 34 0 0 1 0-68h96a38 38 0 0 0 0-76H72a6 6 0 0 0 0 12h96a26 26 0 0 1 0 52H72a46 46 0 0 0 0 92h98.6a30 30 0 1 0 29.4-36m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18");
}
</style><path class="fe4atgbub"/>`,
		"fallback": "ph:path-light",
	});
}

export default Component;
