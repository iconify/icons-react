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
		"content": `<style>.bran81b6h {
  fill: currentColor;
  d: path("M5 2a2 2 0 0 0-2 2v5.6A5.5 5.5 0 0 1 9.743 18H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 5 7zm11 1h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5M16 13h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16zm-6 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6z");
}
</style><path class="bran81b6h"/>`,
		"fallback": "fluent:notebook-add-20-filled",
	});
}

export default Component;
