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
		"content": `<style>.rxwd7lb4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m-5.5-19V6A3.5 3.5 0 0 0 10 9.5h4A3.5 3.5 0 0 0 17.5 6V2.5");
}
</style><path class="rxwd7lb4u"/>`,
		"fallback": "uix:pitchfork",
	});
}

export default Component;
