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
		"content": `<style>.is339abpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 14l4-4m-2.5-3L13 5.5a3.5 3.5 0 0 1 5.5 5.5L17 12.5M12.5 17L11 18.5A3.5 3.5 0 0 1 5.5 13L7 11.5m11 3.25v3.5M18 21h.01");
}
</style><path class="is339abpi"/>`,
		"fallback": "uix-sharp:scam-link",
	});
}

export default Component;
