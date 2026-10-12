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
		"content": `<style>.k74jtgr7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.75v16.5m3-13.5l-3-3l-3 3m6 10.5l-3 3l-3-3");
}
</style><path class="k74jtgr7a"/>`,
		"fallback": "iconoven:move-vertical-sharp",
	});
}

export default Component;
