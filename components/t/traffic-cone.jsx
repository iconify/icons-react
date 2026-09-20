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
		"content": `<style>.az_gz3b5v {
  fill: currentColor;
  d: path("M232 208h-18.31L153.42 34.75A16 16 0 0 0 138.31 24h-20.62a16 16 0 0 0-15.11 10.74L42.31 208H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M95.43 104h65.14l16.7 48H78.73Zm22.26-64h20.62L155 88h-54ZM73.17 168h109.66l13.92 40H59.25Z");
}
</style><path class="az_gz3b5v"/>`,
		"fallback": "ph:traffic-cone",
	});
}

export default Component;
