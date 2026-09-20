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
		"content": `<style>.m_n420b3v {
  fill: currentColor;
  d: path("M20 10V7h-3V6h4v4zM3 10V6h4v1H4v3zm14 8v-1h3v-3h1v4zM3 18v-4h1v3h3v1z");
}
</style><path class="m_n420b3v"/>`,
		"fallback": "material-symbols-light:screenshot-frame-2-outline-sharp",
	});
}

export default Component;
