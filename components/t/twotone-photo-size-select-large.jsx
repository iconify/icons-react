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
		"content": `<style>.wcw4rgbgx {
  fill: currentColor;
  d: path("M17 19h2v2h-2zM1 19c0 1.1.9 2 2 2h12V11H1zm4.5-3.21l1.79 2.15l2.5-3.22L13 19H3zM17 3h2v2h-2zm4 8h2v2h-2zm0 4h2v2h-2zM3 3C2 3 1 4 1 5h2zm18 4h2v2h-2zm-8-4h2v2h-2zm8 18c1 0 2-1 2-2h-2zM1 7h2v2H1zm8-4h2v2H9zM5 3h2v2H5zm16 0v2h2c0-1-1-2-2-2");
}
</style><path class="wcw4rgbgx"/>`,
		"fallback": "ic:twotone-photo-size-select-large",
	});
}

export default Component;
