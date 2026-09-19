import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wr7bctbzm {
  fill: none;
  stroke: currentColor;
  d: path("M17.8 27.37h-8v-5.7c0-17.9 28.4-17.9 28.4 0v5.7h-8V43h7.1a5 5 0 0 0 5.2-5.2V21.67c0-22.2-36.8-22.2-37 0v16.11A4.88 4.88 0 0 0 10.7 43h7.1Z");
}
</style><path class="wr7bctbzm"/>`,
		"fallback": "arcticons:mpdroid",
	});
}

export default Component;
