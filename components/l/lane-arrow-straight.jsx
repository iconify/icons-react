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
		"content": `<style>.t-4n6e8wx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V2.75m-6.5 6.5l6.5-6.5l6.5 6.5");
}
</style><path class="t-4n6e8wx"/>`,
		"fallback": "uix-sharp:lane-arrow-straight",
	});
}

export default Component;
