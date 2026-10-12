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
		"content": `<style>.asa-xtkzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c2.75 0 4.75 2.25 4.75 5.5v13h-9.5v-13c0-3.25 2-5.5 4.75-5.5ZM5.75 7.5l12.5 5m0-5l-12.5 5m0 4h12.5");
}
</style><path class="asa-xtkzn"/>`,
		"fallback": "iconoven:peshawari-chappal-sharp",
	});
}

export default Component;
