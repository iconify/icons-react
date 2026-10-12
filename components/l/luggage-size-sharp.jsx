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
		"content": `<style>.ewq9xjqsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 6.25h12.5v13H5.75zm3.5 0v-3.5h5.5v3.5M9.5 9.75v6m5-6v6m-5.75 3.5v2m6.5-2v2");
}
</style><path class="ewq9xjqsn"/>`,
		"fallback": "iconoven:luggage-size-sharp",
	});
}

export default Component;
