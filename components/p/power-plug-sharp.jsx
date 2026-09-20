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
		"content": `<style>.i087x5x5v {
  fill: currentColor;
  d: path("M10.27 20v-2.654L7 14.077V8h2.346V4h1v4h3.308V4h1v4H17v6.077l-3.27 3.27V20z");
}
</style><path class="i087x5x5v"/>`,
		"fallback": "material-symbols-light:power-plug-sharp",
	});
}

export default Component;
