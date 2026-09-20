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
		"content": `<style>.xbvkzcb9h {
  fill: currentColor;
  d: path("M2 21V6h6V2h8v4h6v15zm2-2h16V8H4zm6-13h4V4h-4zM4 19V8zm5.5-1l7-4.5l-7-4.5z");
}
</style><path class="xbvkzcb9h"/>`,
		"fallback": "material-symbols:shop-outline-sharp",
	});
}

export default Component;
