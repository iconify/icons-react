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
		"content": `<style>.jd8zlbbll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 4.25h5v15.5h-5zm8.5 3.25h5v9h-5zm-11 4.5h18.5");
}
</style><path class="jd8zlbbll"/>`,
		"fallback": "iconoven:vertical-align-middle-sharp",
	});
}

export default Component;
