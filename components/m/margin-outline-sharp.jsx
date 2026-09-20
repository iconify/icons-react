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
		"content": `<style>.uz-ke3zem {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zM7.346 8.904V7.365h1.538v1.539zm3.885 0V7.365h1.538v1.539zm3.885 0V7.365h1.538v1.539zm-7.77 3.865v-1.538h1.539v1.538zm3.885 0v-1.538h1.538v1.538zm3.885 0v-1.538h1.538v1.538z");
}
</style><path class="uz-ke3zem"/>`,
		"fallback": "material-symbols-light:margin-outline-sharp",
	});
}

export default Component;
