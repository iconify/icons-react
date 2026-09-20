import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jo8p5xbnd {
  fill: currentColor;
  d: path("M10.25 6A4.25 4.25 0 0 0 6 10.25v25.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75V28h-8V10.25A4.25 4.25 0 0 0 29.75 6zM34 30.5h5.5v5.25a3.75 3.75 0 0 1-3.75 3.75H34zM13 15.25c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 1 1 0 2.5h-11.5c-.69 0-1.25-.56-1.25-1.25M14.25 23h11.5a1.25 1.25 0 1 1 0 2.5h-11.5a1.25 1.25 0 1 1 0-2.5M13 33.25c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25");
}
</style><path class="jo8p5xbnd"/>`,
		"fallback": "fluent:receipt-48-filled",
	});
}

export default Component;
