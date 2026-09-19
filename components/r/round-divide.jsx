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
		"content": `<style>.gofkv4bvi {
  fill: currentColor;
  d: path("M6 11h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4m0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4");
}
</style><path class="gofkv4bvi"/>`,
		"fallback": "ic:round-divide",
	});
}

export default Component;
