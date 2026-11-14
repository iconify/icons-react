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
		"content": `<style>.c4jjj64ka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v9m-6.5 0h13V15h-13Zm2 3.5v5.5m3-5.5v5.5m3-5.5v5.5m3-5.5v5.5");
}
</style><path class="c4jjj64ka"/>`,
		"fallback": "uix-sharp:snow-brush",
	});
}

export default Component;
