import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y4229qbtr {
  fill: currentColor;
  d: path("M4.75 3A2.75 2.75 0 0 0 2 5.75v6.5A2.75 2.75 0 0 0 4.75 15H9v-2.5a2.5 2.5 0 0 1 2.5-2.5h6q.257 0 .5.05v-4.3A2.75 2.75 0 0 0 15.25 3zM18 11.085a1.5 1.5 0 0 0-.5-.085h-6a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1-1.415");
}
</style><path class="y4229qbtr"/>`,
		"fallback": "fluent:picture-in-picture-20-filled",
	});
}

export default Component;
