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
		"content": `<style>.o0__whzto {
  fill: currentColor;
  d: path("M4.5 3A1.5 1.5 0 0 0 3 4.5v10A2.5 2.5 0 0 0 5.5 17H15a2 2 0 0 0 2-2V7a2 2 0 0 0-1-1.732V5a2 2 0 0 0-2-2zM15 5H4.5a.5.5 0 0 1 0-1H14a1 1 0 0 1 1 1m-1.5 6h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1");
}
</style><path class="o0__whzto"/>`,
		"fallback": "fluent:wallet-20-filled",
	});
}

export default Component;
