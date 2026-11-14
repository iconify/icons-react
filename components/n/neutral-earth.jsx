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
		"content": `<style>.sb5qbcjuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19M12 4v9m-6.5 0h13M8 16.75h8m-5.75 3.75h3.5");
}
</style><path class="sb5qbcjuh"/>`,
		"fallback": "uix-sharp:neutral-earth",
	});
}

export default Component;
