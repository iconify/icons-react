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
		"content": `<style>.m36ft2z7h {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.502 5.502 0 0 0-7.776 3.342a4.2 4.2 0 0 1-1.25-.39a3 3 0 0 1-.487-.296a2 2 0 0 1-.133-.11l-.003-.002a.5.5 0 0 0-.705.71h.001l.001.001l.002.002l.005.005l.015.014l.048.043q.06.053.17.137c.146.11.359.251.639.391c.38.19.881.376 1.503.477Q9 14.208 9 14.5c0 .9.216 1.75.6 2.5H6a3 3 0 0 1-3-3zm4.5 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0m5.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="m36ft2z7h"/>`,
		"fallback": "fluent:sticker-add-20-filled",
	});
}

export default Component;
