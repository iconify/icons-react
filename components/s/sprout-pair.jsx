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
		"content": `<style>.hmm-9hbns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5V10m0 0c0-4-2.5-6.5-7.5-6.5c0 4 3 6.5 7.5 6.5Zm0 0c0-4 2.5-6.5 7.5-6.5c0 4-3 6.5-7.5 6.5Z");
}
</style><path class="hmm-9hbns"/>`,
		"fallback": "uix-sharp:sprout-pair",
	});
}

export default Component;
