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
		"content": `<style>.bn6ebpb5p {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z");
}

.xc5ircjur {
  fill: currentColor;
  d: path("M14.5 11.5H16v-6h-3V7h1.5zM12 10H9V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H7.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H12zm-4.5 4h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm7.5 3h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6H15zm0-3h1.5v1.5H15z");
}
</style><path class="bn6ebpb5p"/><path class="xc5ircjur"/>`,
		"fallback": "ic:outline-21mp",
	});
}

export default Component;
