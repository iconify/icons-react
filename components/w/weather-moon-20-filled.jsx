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
		"content": `<style>.eyd--fbfv {
  fill: currentColor;
  d: path("M16.36 13.997a7.98 7.98 0 0 1-13.485.541a.6.6 0 0 1 .292-.903c3.006-1.076 4.616-2.323 5.55-4.107c.984-1.877 1.238-3.934.55-6.753a.6.6 0 0 1 .614-.74a7.98 7.98 0 0 1 6.478 11.962");
}
</style><path class="eyd--fbfv"/>`,
		"fallback": "fluent:weather-moon-20-filled",
	});
}

export default Component;
