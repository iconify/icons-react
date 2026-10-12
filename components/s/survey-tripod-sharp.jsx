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
		"content": `<style>.udaywsbvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.5L4.5 21.25M12 9.5l7.5 11.75M12 9.5v11.75M8 7h8v2.5H8zm.75 0a3.25 3.25 0 0 1 6.5 0ZM12 3.75v-1");
}
</style><path class="udaywsbvo"/>`,
		"fallback": "iconoven:survey-tripod-sharp",
	});
}

export default Component;
