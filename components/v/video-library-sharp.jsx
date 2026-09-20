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
		"content": `<style>.ifw4kjb2r {
  fill: currentColor;
  d: path("m11.5 14.5l7-4.5l-7-4.5zM6 18V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="ifw4kjb2r"/>`,
		"fallback": "material-symbols:video-library-sharp",
	});
}

export default Component;
