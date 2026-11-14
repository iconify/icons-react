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
		"content": `<style>.u9nb078yh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.812 20H2.5c1.339-3.682 6.711-4.899 10.866-3.651M7.5 2.5h6v5h-6Zm1.5 5V17m3-9.5V17m6.5-3.5c1.75 2.25 3 3.75 3 5.5a3 3 0 0 1-6 0c0-1.75 1.25-3.25 3-5.5Z");
}
</style><path class="u9nb078yh"/>`,
		"fallback": "uix-sharp:soil-moisture-sensor",
	});
}

export default Component;
