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
		"content": `<style>.s5uum4btu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h10v18.5h-10zm3 4.25h4m-4 3h4m3-3.25h5.5V9m0 1.5l1.5 1.917v.683a1.5 1.5 0 0 1-3 0v-.683zM15.5 16h5.75v5.25H15.5z");
}
</style><path class="s5uum4btu"/>`,
		"fallback": "iconoven:refill-station-sharp",
	});
}

export default Component;
