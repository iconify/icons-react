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
		"content": `<style>.i1fk8ibfw {
  fill: currentColor;
  d: path("M6 7V3h4v1H7v3zm0 14v-4h1v3h3v1zM17 7V4h-3V3h4v4zm-3 14v-1h3v-3h1v4z");
}
</style><path class="i1fk8ibfw"/>`,
		"fallback": "material-symbols-light:screenshot-frame-sharp",
	});
}

export default Component;
