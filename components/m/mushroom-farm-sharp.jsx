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
		"content": `<style>.fqw49bf_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 13.5a2.5 2.5 0 0 1 5 0ZM8 10a4 4 0 0 1 8 0Zm7.75 3.5a2.5 2.5 0 0 1 5 0Zm-10 3v4.75M12 13v8.25m6.25-4.75v4.75M2.75 18v3.25h18.5V18");
}
</style><path class="fqw49bf_u"/>`,
		"fallback": "iconoven:mushroom-farm-sharp",
	});
}

export default Component;
