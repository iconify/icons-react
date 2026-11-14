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
		"content": `<style>.auw_3x4ar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5h9.5v19H12Zm0 2.75a7 7 0 1 0 0 13.5M8.5 11h.01");
}
</style><path class="auw_3x4ar"/>`,
		"fallback": "uix-sharp:kid-shy",
	});
}

export default Component;
