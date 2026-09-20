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
		"content": `<style>.kpzngqurn {
  fill: currentColor;
  d: path("M234.83 42.83A4 4 0 0 0 232 36H24a4 4 0 0 0-2.83 6.83L124 145.66V212H88a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8h-36v-66.34ZM33.66 44h188.68l-24 24H57.66ZM128 138.34L65.66 76h124.68Z");
}
</style><path class="kpzngqurn"/>`,
		"fallback": "ph:martini-thin",
	});
}

export default Component;
