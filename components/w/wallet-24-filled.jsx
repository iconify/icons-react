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
		"content": `<style>.kybyzmbsw {
  fill: currentColor;
  d: path("M3 5v12.75A3.25 3.25 0 0 0 6.25 21h12a3.25 3.25 0 0 0 3.25-3.25v-8.5A3.25 3.25 0 0 0 19 6.087V5.25A2.25 2.25 0 0 0 16.75 3H5.25a2.25 2.25 0 0 0-2.236 2zm2.25 1a.75.75 0 0 1 0-1.5h11.5a.75.75 0 0 1 .75.75V6zm11 7h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5");
}
</style><path class="kybyzmbsw"/>`,
		"fallback": "fluent:wallet-24-filled",
	});
}

export default Component;
