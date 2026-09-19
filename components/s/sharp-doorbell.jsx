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
		"content": `<style>.zwnergu6n {
  fill: currentColor;
  d: path("M12 3L4 9v12h16V9zm0 14.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1m4-1.5H8v-1h1v-2.34c0-1.54.82-2.82 2.25-3.16v-1h1.5v1c1.44.34 2.25 1.62 2.25 3.16V15h1z");
}
</style><path class="zwnergu6n"/>`,
		"fallback": "ic:sharp-doorbell",
	});
}

export default Component;
