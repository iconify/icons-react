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
		"content": `<style>.n286cdc8t {
  d: path("M15.25 16.25v4.5h4.5");
}

.sukgh2b7c {
  d: path("M12.4 21.5H3.5v-19h17v9.1M3.5 7h17m-14-2.25h.01m2.74 0h.01M7 11h10M7 14.5h5m9.25.25L15.5 20.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sukgh2b7c"/><path class="n286cdc8t"/></g>`,
		"fallback": "uix-sharp:landing-page-stats",
	});
}

export default Component;
