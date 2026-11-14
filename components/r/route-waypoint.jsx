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
		"content": `<style>.ldz8vr7jq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 18.5H15a3 3 0 0 0 0-6m-6 0a3.5 3.5 0 0 1 0-7h6.5M12 9.75l2.75 2.75L12 15.25L9.25 12.5ZM3.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm12-13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><path class="ldz8vr7jq"/>`,
		"fallback": "uix-sharp:route-waypoint",
	});
}

export default Component;
