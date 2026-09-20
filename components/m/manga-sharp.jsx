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
		"content": `<style>.qgbcscary {
  fill: currentColor;
  d: path("M2 20V4h20v16zm6.1-2H20V7.025L17 8l-3.075-1L12 9.625l-3.075 1v3.25l-1.9 2.625z");
}
</style><path class="qgbcscary"/>`,
		"fallback": "material-symbols:manga-sharp",
	});
}

export default Component;
