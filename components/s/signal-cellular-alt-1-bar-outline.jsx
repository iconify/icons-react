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
		"content": `<style>.n35-htkzb {
  fill: currentColor;
  d: path("M6 19v-4h1.616v4z");
}
</style><path class="n35-htkzb"/>`,
		"fallback": "material-symbols-light:signal-cellular-alt-1-bar-outline",
	});
}

export default Component;
