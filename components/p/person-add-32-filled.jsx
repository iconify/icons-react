import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k16_zjjmk {
  fill: currentColor;
  d: path("M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30q.624 0 1.232-.041A8.97 8.97 0 0 1 14.5 23.5c0-2.071.7-3.98 1.876-5.5zm16 13a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25v3.75h3.75a.75.75 0 0 1 0 1.5H24.5v3.75a.75.75 0 0 1-1.5 0V24h-3.75a.75.75 0 0 1 0-1.5H23v-3.75a.75.75 0 0 1 1.5 0");
}
</style><path class="k16_zjjmk"/>`,
		"fallback": "fluent:person-add-32-filled",
	});
}

export default Component;
