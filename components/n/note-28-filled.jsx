import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ii9m521qy {
  fill: currentColor;
  d: path("M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75V15h-6.25A3.75 3.75 0 0 0 15 18.75V25H6.75A3.75 3.75 0 0 1 3 21.25zM16.5 25h.06L25 16.56v-.06h-6.25a2.25 2.25 0 0 0-2.25 2.25z");
}
</style><path class="ii9m521qy"/>`,
		"fallback": "fluent:note-28-filled",
	});
}

export default Component;
