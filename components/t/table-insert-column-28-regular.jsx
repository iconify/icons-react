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
		"content": `<style>.xb2czub4f {
  fill: currentColor;
  d: path("M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0zm20.5 0a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0zM11.75 3A2.75 2.75 0 0 0 9 5.75v16.5A2.75 2.75 0 0 0 11.75 25h4.5A2.75 2.75 0 0 0 19 22.25V5.75A2.75 2.75 0 0 0 16.25 3zM10.5 5.75c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25V10h-7zm0 5.75h7v5h-7zm0 6.5h7v4.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25z");
}
</style><path class="xb2czub4f"/>`,
		"fallback": "fluent:table-insert-column-28-regular",
	});
}

export default Component;
