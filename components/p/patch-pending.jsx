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
		"content": `<style>.tt3kefk6b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m8.824 3.874l-4.95 4.95q-2.651 2.651 0 5.302t5.302 0l4.95-4.95q2.651-2.651 0-5.302t-5.302 0M5.995 7.409l1.414-1.414q.659-.66 1.591-.66t1.591.66l1.414 1.414q.66.659.66 1.591t-.66 1.591l-1.414 1.414q-.659.66-1.591.66t-1.591-.66l-1.414-1.414q-.66-.659-.66-1.591t.66-1.591M18 14q-4 0-4 4t4 4t4-4t-4-4");
}
</style><path class="tt3kefk6b"/>`,
		"fallback": "uix-solid:patch-pending",
	});
}

export default Component;
