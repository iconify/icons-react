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
		"content": `<style>.bpggxmdmw {
  fill: currentColor;
  d: path("M224 128a88.1 88.1 0 0 1-88 88H64a8 8 0 0 1 0-16h72a72 72 0 0 0 0-144H64a8 8 0 0 1 0-16h72a88.1 88.1 0 0 1 88 88");
}
</style><path class="bpggxmdmw"/>`,
		"fallback": "ph:superset-proper-of",
	});
}

export default Component;
