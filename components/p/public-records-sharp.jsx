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
		"content": `<style>.yhwltxbvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25v-2h6.5l2 2.5h10v13H2.75v-2ZM7 12.75h10m-10 3.5h6.5");
}
</style><path class="yhwltxbvy"/>`,
		"fallback": "iconoven:public-records-sharp",
	});
}

export default Component;
