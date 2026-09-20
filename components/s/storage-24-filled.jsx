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
		"content": `<style>.o38j5-27i {
  fill: currentColor;
  d: path("M5 7h14a3 3 0 0 1 2.995 2.824L22 10v4a3 3 0 0 1-2.824 2.995L19 17H5a3 3 0 0 1-2.995-2.824L2 14v-4a3 3 0 0 1 2.824-2.995zh14zm13 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-4 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="o38j5-27i"/>`,
		"fallback": "fluent:storage-24-filled",
	});
}

export default Component;
