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
		"content": `<style>.j32fqjmvq {
  fill: currentColor;
  d: path("M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0zM17 25h-5a1 1 0 0 1-1-1v-5.5h6zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25M25 11v6h-6.5v-6zm0-4.25V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75M11 4a1 1 0 0 1 1-1h5v6.5h-6zm6 13v-6h-6v6z");
}
</style><path class="j32fqjmvq"/>`,
		"fallback": "fluent:table-stack-left-28-filled",
	});
}

export default Component;
