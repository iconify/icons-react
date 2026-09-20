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
		"content": `<style>.sd0_bcc6z {
  fill: currentColor;
  d: path("M15.493 13.497a6.98 6.98 0 0 1-11.483.892c2.831-1.087 4.558-2.42 5.593-4.397c1.048-2 1.337-4.16.76-6.909a6.98 6.98 0 0 1 5.13 10.414M5.457 16.918A7.981 7.981 0 1 0 9.88 2.035a.6.6 0 0 0-.614.74c.688 2.819.434 4.876-.55 6.753c-.934 1.784-2.544 3.031-5.55 4.107a.6.6 0 0 0-.292.903a7.95 7.95 0 0 0 2.582 2.38");
}
</style><path class="sd0_bcc6z"/>`,
		"fallback": "fluent:weather-moon-20-regular",
	});
}

export default Component;
