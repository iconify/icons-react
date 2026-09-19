import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h47nqikvi {
  fill: currentColor;
  d: path("M16.01 11H4v2h12.01v3L20 12l-3.99-4z");
}
</style><path class="h47nqikvi"/>`,
		"fallback": "ic:outline-arrow-right-alt",
	});
}

export default Component;
