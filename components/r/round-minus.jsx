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
		"content": `<style>.r_lwkacpr {
  fill: currentColor;
  d: path("M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2");
}
</style><path class="r_lwkacpr"/>`,
		"fallback": "ic:round-minus",
	});
}

export default Component;
