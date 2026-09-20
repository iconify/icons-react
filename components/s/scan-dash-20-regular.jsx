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
		"content": `<style>.r9ef8n5so {
  fill: currentColor;
  d: path("M4.5 3A1.5 1.5 0 0 0 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1zm0 14A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1zM17 4.5A1.5 1.5 0 0 0 15.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0zM15.5 17a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1zM6 10a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 6 10");
}
</style><path class="r9ef8n5so"/>`,
		"fallback": "fluent:scan-dash-20-regular",
	});
}

export default Component;
