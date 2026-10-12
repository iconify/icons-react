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
		"content": `<style>.ba8boabbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.75c4 0 6.75 2.25 6.75 5.25S16 17.25 12 17.25S5.25 15 5.25 12S8 6.75 12 6.75m0-4v18.5");
}
</style><path class="ba8boabbh"/>`,
		"fallback": "iconoven:phi-sign",
	});
}

export default Component;
