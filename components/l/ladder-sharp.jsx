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
		"content": `<style>.gzzb6ebak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75v18.5m10-18.5v18.5m-10-14h10M7 12h10M7 16.75h10");
}
</style><path class="gzzb6ebak"/>`,
		"fallback": "iconoven:ladder-sharp",
	});
}

export default Component;
