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
		"content": `<style>.yyhga18xk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 17v-5.5a4 4 0 1 1 3.46-6M6 17h12v4.25H6z");
}
</style><path class="yyhga18xk"/>`,
		"fallback": "iconoven:tow-hook-sharp",
	});
}

export default Component;
