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
		"content": `<style>.sxuwl4bkn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 3.75h12q1.76 0 3.005 1.245T22.25 8v8q0 1.76-1.245 3.005T18 20.25H6q-1.76 0-3.005-1.245T1.75 16V8q0-1.76 1.245-3.005T6 3.75M7 6.5q-2.25 0-2.25 2.25T7 11h1q2.25 0 2.25-2.25T8 6.5zM14.25 9q0 .27.032.508l-5.273 3.651q-.55-.409-1.509-.409q-2.25 0-2.25 2.25t2.25 2.25T9.75 15q0-.27-.032-.508l5.273-3.651q.55.409 1.509.409q2.25 0 2.25-2.25T16.5 6.75T14.25 9");
}
</style><path class="sxuwl4bkn"/>`,
		"fallback": "uix-solid:investigative-board",
	});
}

export default Component;
