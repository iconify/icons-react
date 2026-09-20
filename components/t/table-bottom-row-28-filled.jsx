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
		"content": `<style>.wyr14fb2d {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75V17h1.5V6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25V17H25V6.75A3.75 3.75 0 0 0 21.25 3zM3 21.25A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3zM17 25h-6v-6.5h6zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25");
}
</style><path class="wyr14fb2d"/>`,
		"fallback": "fluent:table-bottom-row-28-filled",
	});
}

export default Component;
