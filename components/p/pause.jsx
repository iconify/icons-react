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
		"content": `<style>.afrcktbrk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.75 17.75V6.25q0-3-3-3t-3 3v11.5q0 1.243.879 2.121q.878.879 2.121.879t2.121-.879q.879-.878.879-2.121m2.5-11.5q0-3 3-3t3 3v11.5q0 1.243-.879 2.121q-.878.879-2.121.879t-2.121-.879q-.879-.878-.879-2.121z");
}
</style><path class="afrcktbrk"/>`,
		"fallback": "uix-solid:pause",
	});
}

export default Component;
