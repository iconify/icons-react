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
		"content": `<style>.hbnksr2bu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8h13v9h-13Zm4 0V4m5 4V4M12 17v4");
}
</style><path class="hbnksr2bu"/>`,
		"fallback": "uix-sharp:travel-adapter",
	});
}

export default Component;
