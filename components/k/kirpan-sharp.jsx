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
		"content": `<style>.vr69d6bhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v5.5m-3.25 0h6.5m-4.75 0h3v7.5c0 2.5-1 4.5-3.25 5.5c.5-1.75.25-3.5.25-5.5Zm0 3.5h3");
}
</style><path class="vr69d6bhc"/>`,
		"fallback": "iconoven:kirpan-sharp",
	});
}

export default Component;
