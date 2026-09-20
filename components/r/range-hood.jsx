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
		"content": `<style>.fdiiu62xx {
  fill: currentColor;
  d: path("M3.05 12H21l-4-4V3H7v5zM4 20h16q.825 0 1.413-.587T22 18v-4H2v4q0 .825.588 1.413T4 20m6-3.3v-1.5h4v1.5z");
}
</style><path class="fdiiu62xx"/>`,
		"fallback": "material-symbols:range-hood",
	});
}

export default Component;
