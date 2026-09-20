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
		"content": `<style>.ln9k5cckw {
  fill: currentColor;
  d: path("M5 21V3h14v18zm1-1h12V4H6zm9.498-7q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293M5 20h1V4H5z");
}
</style><path class="ln9k5cckw"/>`,
		"fallback": "material-symbols-light:sensor-door-outline-sharp",
	});
}

export default Component;
