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
		"content": `<style>.l5ct4aboz {
  fill: currentColor;
  d: path("M8 21V8l7-7l1.85 1.85L15.55 8H23v4.4L19.35 21zm-6 0V8h4v13z");
}
</style><path class="l5ct4aboz"/>`,
		"fallback": "material-symbols:thumb-up-sharp",
	});
}

export default Component;
