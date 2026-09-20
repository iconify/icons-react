import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h8k5nybug {
  fill: currentColor;
  d: path("M4 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4.176A2 2 0 0 1 8 10.179V9a2 2 0 0 1 1-1.732V6a2 2 0 0 1 2-2h2c.293 0 .572.063.823.177A2 2 0 0 0 12 3zm.5 9h4.344l.656.915V13h-5a.5.5 0 0 1 0-1M10 6v2a1 1 0 0 0-1 1v1.179a1 1 0 0 0 .187.582l1.313 1.833V14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.406l1.309-1.8a1 1 0 0 0 .191-.588V9a1 1 0 0 0-1-1V6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m3 0v2h-2V6z");
}
</style><path class="h8k5nybug"/>`,
		"fallback": "fluent:tv-usb-16-filled",
	});
}

export default Component;
