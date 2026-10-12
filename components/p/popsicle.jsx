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
		"content": `<style>.rc4vtebuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8.25a5.5 5.5 0 0 1 11 0v7.5A1.25 1.25 0 0 1 16.25 17h-8.5a1.25 1.25 0 0 1-1.25-1.25Zm3.25-.75v6m4.5-6v6M12 17v4.25");
}
</style><path class="rc4vtebuf"/>`,
		"fallback": "iconoven:popsicle",
	});
}

export default Component;
