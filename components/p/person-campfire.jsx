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
		"content": `<style>.gu8_hl46o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.972 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.357 0 2.612.229 3.691.647M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m12 7c2 2 3 3.25 3 4.75a3 3 0 0 1-6 0c0-1.25.75-2.25 1.5-3c.25 1 .75 1.5 1.25 1.5c.25-1 .25-2.25.25-3.25");
}
</style><path class="gu8_hl46o"/>`,
		"fallback": "uix:person-campfire",
	});
}

export default Component;
