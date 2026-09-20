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
		"content": `<style>.yryr_ezji {
  fill: currentColor;
  d: path("M6 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4m2.5 5h-5A1.5 1.5 0 0 0 2 7.5c0 1.116.459 2.01 1.212 2.615C3.953 10.71 4.947 11 6 11s2.047-.29 2.788-.885C9.54 9.51 10 8.616 10 7.5A1.5 1.5 0 0 0 8.5 6");
}
</style><path class="yryr_ezji"/>`,
		"fallback": "fluent:person-12-filled",
	});
}

export default Component;
