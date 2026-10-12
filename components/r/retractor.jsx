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
		"content": `<style>.au_82y68l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5h18.5m-10.75 0V3.25m3 2.25V3.25M5 5.5v11a2.125 2.125 0 0 0 4.25 0M19 5.5v11a2.125 2.125 0 0 1-4.25 0");
}
</style><path class="au_82y68l"/>`,
		"fallback": "iconoven:retractor",
	});
}

export default Component;
