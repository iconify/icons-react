import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n--wdssdk {
  fill: currentColor;
  d: path("M6.5 0A1.5 1.5 0 0 0 5 1.5V2H4a1 1 0 0 0-1 1v1h-.5a1.5 1.5 0 1 0 0 3H3v1a1 1 0 0 0 1 1h1v.5a1.5 1.5 0 0 0 3 0V9h1a1 1 0 0 0 1-1V6H8.5a.5.5 0 0 1 0-1H10V3a1 1 0 0 0-1-1H8v-.5A1.5 1.5 0 0 0 6.5 0");
}
</style><path class="n--wdssdk"/>`,
		"fallback": "fluent:puzzle-piece-12-filled",
	});
}

export default Component;
