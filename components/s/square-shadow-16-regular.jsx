import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o7_bxqbja {
  fill: currentColor;
  d: path("M8.5 1A2.5 2.5 0 0 1 11 3.5V5h1.5A2.5 2.5 0 0 1 15 7.5V12a3 3 0 0 1-3 3H7.5A2.5 2.5 0 0 1 5 12.5V11H3.5A2.5 2.5 0 0 1 1 8.5v-5A2.5 2.5 0 0 1 3.5 1zm-5 1A1.5 1.5 0 0 0 2 3.5v5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5v-5A1.5 1.5 0 0 0 8.5 2z");
}
</style><path class="o7_bxqbja"/>`,
		"fallback": "fluent:square-shadow-16-regular",
	});
}

export default Component;
