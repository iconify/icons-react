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
		"content": `<style>.tmtwjz6nb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v5.5m-2.5-5.5h5M9 8.25h7v2.5l-.004.371l-.246.279l-3 9.1l-.75 2.021l-.75-2.021l-3-9.1l-.246-.279L8 10.75v-2.5zm-1 3h8");
}
</style><path class="tmtwjz6nb"/>`,
		"fallback": "iconoven:plumb-bob-sharp",
	});
}

export default Component;
