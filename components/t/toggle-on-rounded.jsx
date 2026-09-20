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
		"content": `<style>.olge35baz {
  fill: currentColor;
  d: path("M7 18q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6h10q2.5 0 4.25 1.75T23 12t-1.75 4.25T17 18zm12.125-3.875Q20 13.25 20 12t-.875-2.125T17 9t-2.125.875T14 12t.875 2.125T17 15t2.125-.875");
}
</style><path class="olge35baz"/>`,
		"fallback": "material-symbols:toggle-on-rounded",
	});
}

export default Component;
