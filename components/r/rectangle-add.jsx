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
		"content": `<style>.qnf5h60jp {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm6.884-3.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3z");
}
</style><path class="qnf5h60jp"/>`,
		"fallback": "material-symbols-light:rectangle-add",
	});
}

export default Component;
