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
		"content": `<style>.x9-qfnjhm {
  fill: currentColor;
  d: path("M20 1v3h3v2h-3v3h-2V6h-3V4h3V1zm-8 12c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m2-9.75V7h3v3h2.92c.05.39.08.79.08 1.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c.68 0 1.35.08 2 .25");
}
</style><path class="x9-qfnjhm"/>`,
		"fallback": "ic:sharp-add-location-alt",
	});
}

export default Component;
