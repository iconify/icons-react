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
		"content": `<style>.zjt0y8b7t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2L18 2C20.2092 2 22 3.7908 22 6L22 18C22 20.2092 20.2092 22 18 22L6 22C3.7908 22 2 20.2092 2 18L2 6C2 3.7908 3.7908 2 6 2ZM10.5858 6.5858L6.5858 10.5858C5.8047 11.3668 5.8047 12.6332 6.5858 13.4142L10.5858 17.4142C11.3668 18.1953 12.6332 18.1953 13.4142 17.4142L17.4142 13.4142C18.1953 12.6332 18.1953 11.3668 17.4142 10.5858L13.4142 6.5858C12.6332 5.8047 11.3668 5.8047 10.5858 6.5858Z");
}
</style><path clip-rule="evenodd" class="zjt0y8b7t"/>`,
		"fallback": "keyline-icons:square-diamond-fill",
	});
}

export default Component;
