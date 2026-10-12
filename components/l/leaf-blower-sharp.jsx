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
		"content": `<style>.ick91xd2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8h7.5v9h-7.5zm2 0V4.25H9.5V8m1.49 2.15l4.77.95l.74.15v3l-.74.09l-4.77.57l-.74.09v-5zm8.01 1.1l2.25-.75M19 14.25l2.25.75");
}
</style><path class="ick91xd2r"/>`,
		"fallback": "iconoven:leaf-blower-sharp",
	});
}

export default Component;
