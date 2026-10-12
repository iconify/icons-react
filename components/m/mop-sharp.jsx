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
		"content": `<style>.kpqi0cc5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v9m-4.5 0h9v3.5h-9zm1.5 3.5L7 20.5m5-5.25v6m3-6l1.75 4.5");
}
</style><path class="kpqi0cc5z"/>`,
		"fallback": "iconoven:mop-sharp",
	});
}

export default Component;
