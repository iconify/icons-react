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
		"content": `<style>.bih3k4bvw {
  fill: currentColor;
  d: path("M9.5 5H14q1.25 0 2.125.875T17 8v2.5q0 1.25-.875 2.125T14 13.5h-3V16h4.5q.625 0 1.063.438T17 17.5t-.437 1.063T15.5 19h-6q-.625 0-1.062-.437T8 17.5v-4q0-1.25.875-2.125T11 10.5h3V8H9.5q-.625 0-1.062-.437T8 6.5t.438-1.062T9.5 5");
}
</style><path class="bih3k4bvw"/>`,
		"fallback": "material-symbols:timer-2-rounded",
	});
}

export default Component;
