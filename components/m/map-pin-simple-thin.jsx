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
		"content": `<style>.prh2l4bbn {
  fill: currentColor;
  d: path("M180 72a52 52 0 1 0-56 51.83V232a4 4 0 0 0 8 0V123.83A52.05 52.05 0 0 0 180 72m-52 44a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44");
}
</style><path class="prh2l4bbn"/>`,
		"fallback": "ph:map-pin-simple-thin",
	});
}

export default Component;
