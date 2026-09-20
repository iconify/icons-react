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
		"content": `<style>.th3yqyb4z {
  fill: currentColor;
  d: path("M2.75 7.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="th3yqyb4z"/>`,
		"fallback": "fluent:re-order-20-filled",
	});
}

export default Component;
