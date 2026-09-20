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
		"content": `<style>.eoflcvamf {
  fill: currentColor;
  d: path("M243.61 174.27A4 4 0 0 0 240 172H140v-32h76a4 4 0 0 0 3-6.69l-79-86.86V8a4 4 0 0 0-7.1-2.52l-104 128A4 4 0 0 0 32 140h100v32H16a4 4 0 0 0-3.12 6.5l29.59 37a12 12 0 0 0 9.37 4.5h152.32a12 12 0 0 0 9.37-4.5l29.59-37a4 4 0 0 0 .49-4.23M207 132h-67V58.35Zm-166.6 0L132 19.27V132Zm166.88 78.5a4 4 0 0 1-3.12 1.5H51.84a4 4 0 0 1-3.12-1.5L24.32 180h207.36Z");
}
</style><path class="eoflcvamf"/>`,
		"fallback": "ph:sailboat-thin",
	});
}

export default Component;
