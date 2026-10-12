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
		"content": `<style>.z4v-s3bxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 13h9.75v4h1.75v4.25H4.75V17H6.5v-4zM6.5 17h11M12 12.25V7m0 1.75c0-2.6-1.9-4.5-4.75-4.5c0 2.6 1.9 4.5 4.75 4.5ZM12 7c0-2.3 1.7-4.25 4.5-4.25C16.5 5.05 14.8 7 12 7Z");
}
</style><path class="z4v-s3bxa"/>`,
		"fallback": "iconoven:plant-growth-sharp",
	});
}

export default Component;
