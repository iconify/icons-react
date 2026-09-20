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
		"content": `<style>.fz60h1bbc {
  fill: currentColor;
  d: path("M20.628 16.128a3.711 3.711 0 0 1 5.327 5.168l-5.236 5.398a1 1 0 0 1-1.436 0l-5.236-5.398a3.712 3.712 0 0 1 5.328-5.168l.626.645zM12.858 16a4.71 4.71 0 0 0 .471 5.992l3.639 3.752C16.04 25.91 15.046 26 14 26c-5.79 0-10-2.567-10-6.285V19a3 3 0 0 1 3-3zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12");
}
</style><path class="fz60h1bbc"/>`,
		"fallback": "fluent:person-heart-28-filled",
	});
}

export default Component;
