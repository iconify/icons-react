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
		"content": `<style>.ok4k51sgy {
  fill: currentColor;
  d: path("M8.75 5a3.75 3.75 0 0 1 3.747 3.666l.006.084c0 3.924-1.31 6.938-2.621 8.969a15.7 15.7 0 0 1-1.808 2.306a12 12 0 0 1-.782.75l-.07.058l-.002.002h-.001a.75.75 0 0 1-.937-1.17l.005-.006l.033-.027q.048-.04.14-.124c.125-.113.307-.286.528-.518a14 14 0 0 0 1.633-2.084a14.8 14.8 0 0 0 2.042-4.931A3.75 3.75 0 1 1 8.75 5m10.5 0a3.75 3.75 0 0 1 3.747 3.666l.006.084a16.4 16.4 0 0 1-2.621 8.969a15.7 15.7 0 0 1-1.808 2.306a12 12 0 0 1-.782.75l-.07.058l-.002.002h-.001a.75.75 0 0 1-.937-1.17l.005-.006l.033-.027q.047-.04.14-.124c.125-.113.307-.286.528-.518a14 14 0 0 0 1.633-2.084a14.8 14.8 0 0 0 2.042-4.931A3.75 3.75 0 1 1 19.25 5M8.75 6.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m10.5 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5");
}
</style><path class="ok4k51sgy"/>`,
		"fallback": "fluent:text-quote-28-regular",
	});
}

export default Component;
