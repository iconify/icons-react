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
		"content": `<style>.ygvuvqbqf {
  fill: currentColor;
  d: path("M13 7.829V11h3a3 3 0 0 1 3 3v3.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L17 17.586V14a1 1 0 0 0-1-1H8a.997.997 0 0 0-1 1v3.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.413.001h-.001l-3-3.001a.999.999 0 1 1 1.414-1.414L5 17.586V14a3 3 0 0 1 3-3h3V7.829a3 3 0 1 1 2 0");
}
</style><path class="ygvuvqbqf"/>`,
		"fallback": "coolicons:network-split-fill",
	});
}

export default Component;
