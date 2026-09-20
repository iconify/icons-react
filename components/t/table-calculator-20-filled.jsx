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
		"content": `<style>.tg09fgixp {
  fill: currentColor;
  d: path("M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-6 5V8H3v4zm5-3.5V8H8v4h3v-1.5c0-.818.393-1.544 1-2M11 13H8v4h3zm-4 0H3v1.5A2.5 2.5 0 0 0 5.5 17H7zm5-6V3H8v4zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3zm5 7.5A1.5 1.5 0 0 1 13.5 9h4a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5zm2.5 2.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5M14.5 15h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5M14.5 17h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5M13.5 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z");
}
</style><path class="tg09fgixp"/>`,
		"fallback": "fluent:table-calculator-20-filled",
	});
}

export default Component;
