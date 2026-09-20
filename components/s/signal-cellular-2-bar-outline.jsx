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
		"content": `<style>.yi9wkcbtj {
  fill: currentColor;
  d: path("M3 21L21 3v18zm9.289-1H20V5.427l-7.711 7.712z");
}
</style><path class="yi9wkcbtj"/>`,
		"fallback": "material-symbols-light:signal-cellular-2-bar-outline",
	});
}

export default Component;
