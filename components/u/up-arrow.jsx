import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pq2w1qbxc {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m5.143 28.305V49H26.857V30.305H16L32 15l16 15.305z");
}
</style><path class="pq2w1qbxc"/>`,
		"fallback": "emojione-monotone:up-arrow",
	});
}

export default Component;
