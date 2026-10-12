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
		"content": `<style>.v5jwe3b-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.88 5.05l9.24 5.65q2.13 1.3 0 2.6l-9.24 5.65q-2.13 1.3-2.13-1.2V6.25q0-2.5 2.13-1.2");
}
</style><path class="v5jwe3b-t"/>`,
		"fallback": "iconoven:play",
	});
}

export default Component;
