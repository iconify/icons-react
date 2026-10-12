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
		"content": `<style>.efxvnrudz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v3H2.75zm6 3h6.5V18h-6.5zm3.25 3V15m-6.75 3h13.5v3.25H5.25z");
}
</style><path class="efxvnrudz"/>`,
		"fallback": "iconoven:pillar-sharp",
	});
}

export default Component;
