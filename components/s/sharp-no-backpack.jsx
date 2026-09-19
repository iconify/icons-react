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
		"content": `<style>.zwek23dvq {
  fill: currentColor;
  d: path("M21.19 21.19L2.81 2.81L1.39 4.22l2.76 2.76C4.06 7.31 4 7.64 4 8v14h15.17l.61.61zM6 14v-2h3.17l2 2zm.98-9.85c.01 0 .01-.01.02-.01V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86v9.17l-2-2V12h-3.17z");
}
</style><path class="zwek23dvq"/>`,
		"fallback": "ic:sharp-no-backpack",
	});
}

export default Component;
