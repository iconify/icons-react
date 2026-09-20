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
		"content": `<style>.iy8gbccnp {
  fill: currentColor;
  d: path("M3 21v-1h2V10H3v-.461l9-6.308l9 6.307V10h-2v10h2v1zm3-1h12zm2.616-2.5h1V13L12 16.538L14.385 13v4.5h1v-6h-1.116L12 14.885L9.73 11.5H8.617zM18 20V8.65l-6-4.2l-6 4.2V20z");
}
</style><path class="iy8gbccnp"/>`,
		"fallback": "material-symbols-light:museum-outline",
	});
}

export default Component;
