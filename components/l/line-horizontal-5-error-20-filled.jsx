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
		"content": `<style>.h03o-p43f {
  fill: currentColor;
  d: path("M2.75 3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h7.14A5.5 5.5 0 0 1 11.336 9zm0 3h6.457A5.5 5.5 0 0 0 9 13.5H2.75a.75.75 0 0 1 0-1.5m0 3h6.457c.152.538.384 1.043.682 1.5H2.75a.75.75 0 0 1 0-1.5m0-9a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zM19 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25");
}
</style><path class="h03o-p43f"/>`,
		"fallback": "fluent:line-horizontal-5-error-20-filled",
	});
}

export default Component;
