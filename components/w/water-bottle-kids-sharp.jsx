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
		"content": `<style>.cv492sbir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 5.5V2.75h3V5.5m3 0V4l2-1.25M8.25 5.5h7.5v3h-7.5zM7 11.5h10v9.75H7z");
}
</style><path class="cv492sbir"/>`,
		"fallback": "iconoven:water-bottle-kids-sharp",
	});
}

export default Component;
