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
		"content": `<style>.oi2irrbhw {
  fill: currentColor;
  d: path("M10.5 15a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M23 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-9 9c0-2.712 1.2-5.143 3.096-6.793A3 3 0 0 0 16 17H5a3 3 0 0 0-3 3v.15S2 26 10.5 26c1.442 0 2.64-.168 3.633-.448A9 9 0 0 1 14 24m9 7.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V23h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V24.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0");
}
</style><path class="oi2irrbhw"/>`,
		"fallback": "fluent:people-add-32-filled",
	});
}

export default Component;
