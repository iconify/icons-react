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
		"content": `<style>.o5nieigqw {
  fill: currentColor;
  d: path("M11.36 1.842a.75.75 0 0 0-.72 0l-7.81 4.26C2.318 6.382 2 6.917 2 7.5v8.25A3.25 3.25 0 0 0 5.25 19h11.5A3.25 3.25 0 0 0 20 15.75V7.5c0-.583-.318-1.119-.83-1.398zM11 11.146L3.858 7.25L11 3.354l7.142 3.896zm.36 1.512l7.14-3.895v6.987a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75V8.763l7.14 3.895a.75.75 0 0 0 .72 0M21 7.511a3.25 3.25 0 0 1 1.5 2.739v6a5.25 5.25 0 0 1-5.25 5.25h-9A3.25 3.25 0 0 1 5.51 20h11.74A3.75 3.75 0 0 0 21 16.25z");
}
</style><path class="o5nieigqw"/>`,
		"fallback": "fluent:mail-read-multiple-24-regular",
	});
}

export default Component;
