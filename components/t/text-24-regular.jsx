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
		"content": `<style>.v5q8hdbdl {
  fill: currentColor;
  d: path("M5 4.75A.75.75 0 0 1 5.75 4h12.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5.5h-4.75v13h1.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.5v-13H6.5v1.25a.75.75 0 0 1-1.5 0z");
}
</style><path class="v5q8hdbdl"/>`,
		"fallback": "fluent:text-24-regular",
	});
}

export default Component;
