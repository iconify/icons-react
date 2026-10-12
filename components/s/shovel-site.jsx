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
		"content": `<style>.yonbx_uyx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 13.25h8v4.5a3.5 3.5 0 0 1-3.5 3.5h-1a3.5 3.5 0 0 1-3.5-3.5Zm4 0v-7m-2.25 0h4.5m-4.5 0V4a1.25 1.25 0 0 1 1.25-1.25h2A1.25 1.25 0 0 1 17.75 4v2.25m-15 15c.5-3.5 2.1-5.25 3.5-5.25s3 1.75 3.5 5.25Z");
}
</style><path class="yonbx_uyx"/>`,
		"fallback": "iconoven:shovel-site",
	});
}

export default Component;
