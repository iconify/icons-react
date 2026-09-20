import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hi6chrbbh {
  fill: currentColor;
  d: path("M154.64 26.61a6 6 0 0 0-6.32.65L77.94 82H32a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 158 224V32a6 6 0 0 0-3.36-5.39M30 160V96a2 2 0 0 1 2-2h42v68H32a2 2 0 0 1-2-2m116 51.73l-60-46.67V90.94l60-46.67Z");
}
</style><path class="hi6chrbbh"/>`,
		"fallback": "ph:speaker-none-light",
	});
}

export default Component;
