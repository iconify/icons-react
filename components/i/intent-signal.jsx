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
		"content": `<style>.k5ip5yzgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 9l11 4l-5 2l-2 5Zm-2.898-.776a3 3 0 0 1 2.122-2.122M2.845 7.915a6.25 6.25 0 0 1 5.07-5.07");
}
</style><path class="k5ip5yzgm"/>`,
		"fallback": "uix-sharp:intent-signal",
	});
}

export default Component;
