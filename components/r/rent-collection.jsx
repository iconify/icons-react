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
		"content": `<style>.c_4vrabbc {
  d: path("M12.9 19H2.5V7.5h17v5.1");
}

.q-byqobah {
  d: path("M5 7.5V5h16.5v6.6M5 16.5h.01M17 10h.01M6.25 13.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0h3.2m-.2 0v2M21 15l-5.25 5.25m0-4.25v4.25H20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c_4vrabbc"/><path class="q-byqobah"/></g>`,
		"fallback": "uix-sharp:rent-collection",
	});
}

export default Component;
