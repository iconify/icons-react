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
		"content": `<style>.w-ufpwz5r {
  fill: currentColor;
  d: path("M2 22L21.975 2.025V12.65q-.45-.275-.95-.438t-1.05-.262v-5.1L6.825 20H13.2q.2.575.5 1.075t.675.925zm16 0v-3h-3v-2h3v-3h2v3h3v2h-3v3zM6.825 20l13.15-13.15l-3.412 3.413l-3.025 3.024l-3.088 3.088z");
}
</style><path class="w-ufpwz5r"/>`,
		"fallback": "material-symbols:signal-cellular-add-outline",
	});
}

export default Component;
