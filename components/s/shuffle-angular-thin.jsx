import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ufyiuxb6t {
  fill: currentColor;
  d: path("M234.83 181.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L222.34 188H168a4 4 0 0 1-3.25-1.67L85.94 76H32a4 4 0 0 1 0-8h56a4 4 0 0 1 3.25 1.67L170.06 180h52.28l-17.17-17.17a4 4 0 0 1 5.66-5.66Zm-89.49-77.44a4 4 0 0 0 5.58-.93L170.06 76h52.28l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L222.34 68H168a4 4 0 0 0-3.25 1.67l-20.34 28.48a4 4 0 0 0 .93 5.58m-34.68 48.54a4 4 0 0 0-5.58.93L85.94 180H32a4 4 0 0 0 0 8h56a4 4 0 0 0 3.25-1.67l20.34-28.48a4 4 0 0 0-.93-5.58");
}
</style><path class="ufyiuxb6t"/>`,
		"fallback": "ph:shuffle-angular-thin",
	});
}

export default Component;
