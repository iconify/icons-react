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
		"content": `<style>.cbr6zd35g {
  fill: currentColor;
  d: path("M9.462 18.616h5.077l-1.668-2.191l-1.238 1.456l-.821-1.089zM7 21V11h10v10zM4.327 8.77q.739-2.572 2.864-4.171T12 3q2.223 0 4.099 1.144T19 7.234V4h1v4.77h-4.77v-1h2.862q-.84-1.726-2.49-2.748T12 4Q9.725 4 7.907 5.306t-2.52 3.463z");
}
</style><path class="cbr6zd35g"/>`,
		"fallback": "material-symbols-light:replace-image-sharp",
	});
}

export default Component;
