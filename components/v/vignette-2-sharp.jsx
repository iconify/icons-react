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
		"content": `<style>.zrths5b-z {
  fill: currentColor;
  d: path("M4 20V4h16v16zm11.75-4.26q1.539-1.528 1.539-3.74T15.75 8.25T12 6.712T8.26 8.25T6.73 12t1.53 3.74q1.529 1.53 3.74 1.53t3.75-1.53");
}
</style><path class="zrths5b-z"/>`,
		"fallback": "material-symbols-light:vignette-2-sharp",
	});
}

export default Component;
