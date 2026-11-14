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
		"content": `<style>.gbk_6bcld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 3.5h5.5v5.75h5.75v5.5h-5.75v5.75h-5.5v-5.75H3.5v-5.5h5.75Z");
}
</style><path class="gbk_6bcld"/>`,
		"fallback": "uix-sharp:medical-cross",
	});
}

export default Component;
