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
		"content": `<style>.dk47f8b-v {
  fill: currentColor;
  d: path("M11.15 15h3.35q.625 0 1.063.438T16 16.5t-.437 1.063T14.5 18H7q-.425 0-.712-.288T6 17V9.5q0-.625.438-1.062T7.5 8t1.063.438T9 9.5v3.25l5.7-5.7q.45-.45 1.1-.45t1.1.45t.45 1.1t-.45 1.1z");
}
</style><path class="dk47f8b-v"/>`,
		"fallback": "material-symbols:transit-enterexit-outline-rounded",
	});
}

export default Component;
