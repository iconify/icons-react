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
		"content": `<style>.nv5mnbbwo {
  fill: currentColor;
  d: path("M12.27 19v-1h2.865l4.615-6l-4.615-6H4v4.616H3V5h12.635L21 12l-5.365 7zm-6.385 1v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="nv5mnbbwo"/>`,
		"fallback": "material-symbols-light:new-label-outline-sharp",
	});
}

export default Component;
