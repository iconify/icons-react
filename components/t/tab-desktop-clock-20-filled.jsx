import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xmw8jbclr {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5v4.1a5.5 5.5 0 0 1 7.4 7.4h4.1a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3zM9 3v2.5a.5.5 0 0 0 .5.5H17v-.5A2.5 2.5 0 0 0 14.5 3zM5.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a.5.5 0 0 1 .5.5V14h1a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5");
}
</style><path class="xmw8jbclr"/>`,
		"fallback": "fluent:tab-desktop-clock-20-filled",
	});
}

export default Component;
