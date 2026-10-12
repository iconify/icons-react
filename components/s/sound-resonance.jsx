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
		"content": `<style>.nzeiu3bnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 10v4m4-7.25v10.5m8.5-10.5v10.5m4-7.25v4M12 3.75v16.5");
}
</style><path class="nzeiu3bnp"/>`,
		"fallback": "iconoven:sound-resonance",
	});
}

export default Component;
