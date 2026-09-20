import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l1ucf18gv {
  fill: currentColor;
  d: path("M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75zM16 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4M5 8v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m9 5a1 1 0 0 0-1 1v.25A2.75 2.75 0 0 0 15.75 17h.5A2.75 2.75 0 0 0 19 14.25V14a1 1 0 0 0-1-1z");
}
</style><path class="l1ucf18gv"/>`,
		"fallback": "fluent:share-screen-person-overlay-inside-24-filled",
	});
}

export default Component;
