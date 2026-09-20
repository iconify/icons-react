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
		"content": `<style>.cdvh-6mub {
  fill: currentColor;
  d: path("M5.5 3H12v4H3V5.5A2.5 2.5 0 0 1 5.5 3M8 8h9v4H8zm-1 4V8H3v4zm-4 1h9v4H5.5A2.5 2.5 0 0 1 3 14.5zm10 0v4h1.5a2.5 2.5 0 0 0 2.5-2.5V13zm0-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13z");
}
</style><path class="cdvh-6mub"/>`,
		"fallback": "fluent:table-offset-20-filled",
	});
}

export default Component;
