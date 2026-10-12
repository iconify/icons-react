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
		"content": `<style>.rxg23cj0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.75v18.5M12 2.75v18.5m7.5-18.5v18.5M2.75 8.5h18.5M2.75 15h18.5M4.5 8.5L12 15m0 0l7.5 6.25M12 2.75l7.5 5.75");
}
</style><path class="rxg23cj0k"/>`,
		"fallback": "iconoven:scaffold-sharp",
	});
}

export default Component;
