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
		"content": `<style>.k7dic6q-w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.75 2.25h8.5q1.243 0 2.121.879q.879.878.879 2.121q0 3-3 3h-8.5q-3 0-3-3q0-1.243.879-2.121q.878-.879 2.121-.879m9.5 6.5H6.75q-1.243 0-2.121.879q-.879.878-.879 2.121q0 3 3 3h10.5q3 0 3-3q0-1.243-.879-2.121q-.878-.879-2.121-.879m-11.5 6.5h12.5q3 0 3 3q0 1.243-.879 2.121q-.878.879-2.121.879H5.75q-1.243 0-2.121-.879q-.879-.878-.879-2.121q0-3 3-3");
}
</style><path class="k7dic6q-w"/>`,
		"fallback": "uix-solid:towel-stack",
	});
}

export default Component;
