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
		"content": `<style>.umqdxljtb {
  fill: currentColor;
  d: path("M9 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM3 5.5A3.5 3.5 0 0 1 6.5 2h7A3.5 3.5 0 0 1 17 5.5V8h1a.5.5 0 0 1 0 1h-1v7.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V16H7v.5A1.5 1.5 0 0 1 5.5 18h-1A1.5 1.5 0 0 1 3 16.5V9H2a.5.5 0 0 1 0-1h1zm13 0A2.5 2.5 0 0 0 13.5 3h-7A2.5 2.5 0 0 0 4 5.5V10h12zM14 16v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V16zM4 16v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V16zm4-3a1 1 0 1 0-2 0a1 1 0 0 0 2 0m5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="umqdxljtb"/>`,
		"fallback": "fluent:vehicle-bus-20-filled",
	});
}

export default Component;
