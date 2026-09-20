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
		"content": `<style>.zi660qb7d {
  fill: currentColor;
  d: path("M2 19.77V8.076h1v10.692h15v1zM21 8V5h-3V4h4v4zM5 8V4h4v1H6v3zm13 8.77v-1h3v-3h1v4zm-13 0v-4h1v3h3v1zm7.192-3.309l4.86-3.077l-4.86-3.076z");
}
</style><path class="zi660qb7d"/>`,
		"fallback": "material-symbols-light:video-frame-copy-outline-sharp",
	});
}

export default Component;
