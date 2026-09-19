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
		"content": `<style>.h0o-3n8yg {
  fill: currentColor;
  d: path("M5.59 19L7 20.41l6-6V8h3.5L12 3.5L7.5 8H11v5.59zm11.407 1.41l-3.408-3.407l1.4-1.407l3.41 3.408z");
}
</style><path class="h0o-3n8yg"/>`,
		"fallback": "ic:twotone-merge-type",
	});
}

export default Component;
