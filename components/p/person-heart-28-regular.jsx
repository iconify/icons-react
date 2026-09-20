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
		"content": `<style>.fidpk54jv {
  fill: currentColor;
  d: path("M20.628 16.128a3.711 3.711 0 0 1 5.327 5.168l-5.236 5.398a1 1 0 0 1-1.436 0l-5.236-5.398a3.712 3.712 0 0 1 5.328-5.168l.626.645zM12.858 16a4.7 4.7 0 0 0-.699 1.5H7a1.5 1.5 0 0 0-1.493 1.355L5.5 19v.715c0 2.674 3.389 4.785 8.5 4.785q.872-.001 1.678-.087l1.29 1.331C16.04 25.91 15.046 26 14 26c-5.79 0-10-2.567-10-6.285V19a3 3 0 0 1 3-3zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 1.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9");
}
</style><path class="fidpk54jv"/>`,
		"fallback": "fluent:person-heart-28-regular",
	});
}

export default Component;
