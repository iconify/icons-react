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
		"content": `<style>.fsrza1j3y {
  fill: currentColor;
  d: path("M7.438 19.563Q7 19.125 7 18.5V7H3.5q-.625 0-1.062-.437T2 5.5t.438-1.062T3.5 4h10q.625 0 1.063.438T15 5.5t-.437 1.063T13.5 7H10v11.5q0 .625-.437 1.063T8.5 20t-1.062-.437m9 0Q16 19.125 16 18.5V12h-1.5q-.625 0-1.062-.437T13 10.5t.438-1.062T14.5 9h6q.625 0 1.063.438T22 10.5t-.437 1.063T20.5 12H19v6.5q0 .625-.437 1.063T17.5 20t-1.062-.437");
}
</style><path class="fsrza1j3y"/>`,
		"fallback": "material-symbols:text-fields-outline-rounded",
	});
}

export default Component;
