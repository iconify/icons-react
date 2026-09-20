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
		"content": `<style>.cyxjcbc1q {
  fill: currentColor;
  d: path("M20 128a44.05 44.05 0 0 0 44 44h40a4 4 0 0 1 0 8H64a52 52 0 0 1 0-104h40a4 4 0 0 1 0 8H64a44.05 44.05 0 0 0-44 44m172-52h-40a4 4 0 0 0 0 8h40a44 44 0 0 1 0 88h-40a4 4 0 0 0 0 8h40a52 52 0 0 0 0-104");
}
</style><path class="cyxjcbc1q"/>`,
		"fallback": "ph:link-simple-horizontal-break-thin",
	});
}

export default Component;
