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
		"content": `<style>.mj4w53b0y {
  fill: currentColor;
  d: path("m7.5 23l.9-2.5H6.5L7.75 17h2.5l-1.075 2.5h2.075L8.5 23zm6.75-1l.7-2H13l1.075-3h2.5l-.875 2h2.05l-2.5 3zM7.5 16q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z");
}
</style><path class="mj4w53b0y"/>`,
		"fallback": "material-symbols:thunderstorm",
	});
}

export default Component;
