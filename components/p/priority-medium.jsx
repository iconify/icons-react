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
		"content": `<style>.gz0qc-bjw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.25 6.25q0-3 3-3t3 3v11.5q0 3-3 3q-1.243 0-2.121-.879q-.879-.878-.879-2.121zM15 17.75v-6.5q0-3-3-3t-3 3v6.5q0 1.243.879 2.121q.878.879 2.121.879t2.121-.879Q15 18.993 15 17.75M2.629 14.129q.878-.879 2.121-.879q3 0 3 3v1.5q0 1.243-.879 2.121q-.878.879-2.121.879t-2.121-.879q-.879-.878-.879-2.121v-1.5q0-1.243.879-2.121");
}
</style><path class="gz0qc-bjw"/>`,
		"fallback": "uix-solid:priority-medium",
	});
}

export default Component;
