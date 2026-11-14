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
		"content": `<style>.x3en67lfd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.25 9.306V17q0-2.25 2.25-2.25H7q2.25 0 2.25 2.25v1.5q0 2.25-2.25 2.25h9.008q1.558 0 2.107-1.458q.548-1.459-.625-2.485L6.982 7.613q-1.091-.956-2.412-.356q-1.32.599-1.32 2.049");
}
</style><path class="x3en67lfd"/>`,
		"fallback": "uix-solid:pythagorean-theorem",
	});
}

export default Component;
