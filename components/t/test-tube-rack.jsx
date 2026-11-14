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
		"content": `<style>.gbdh97ycm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3v11.5a1.5 1.5 0 0 0 3 0V3m2.5 0v11.5a1.5 1.5 0 0 0 3 0V3M16 3v11.5a1.5 1.5 0 0 0 3 0V3M2.5 9h19m-19 10h19");
}
</style><path class="gbdh97ycm"/>`,
		"fallback": "uix-sharp:test-tube-rack",
	});
}

export default Component;
