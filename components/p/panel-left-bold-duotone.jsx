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
		"content": `<style>.es2bfhexf {
  fill: currentColor;
  d: path("M2 11.0001L2 13.0001C2 16.7714 2 18.657 3.17157 19.8285C4.1459 20.8029 6.36409 20.9669 9 20.9945L9 3.00571C6.36409 3.03333 4.1459 3.19736 3.17157 4.1717C2 5.34327 2 7.22889 2 11.0001Z");
}

.wy6caez-r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.8284 19.8283C22 18.6568 22 16.7711 22 12.9999L22 10.9999C22 7.22867 22 5.34305 20.8284 4.17148C19.6569 2.99991 17.7712 2.99991 14 2.99991L10 2.99991C9.91573 2.99991 9.0824 2.99986 9 2.99988L9 20.9999C9.0824 20.9999 9.91573 20.9999 10 20.9999L14 20.9999C17.7712 20.9999 19.6569 20.9999 20.8284 19.8283Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path clip-rule="evenodd" class="wy6caez-r"/><path class="es2bfhexf"/>`,
		"fallback": "solar:panel-left-bold-duotone",
	});
}

export default Component;
