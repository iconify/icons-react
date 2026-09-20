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
		"content": `<style>.yxqhu3fju {
  fill: currentColor;
  d: path("M9.65 15.75L12 13.425l2.325 2.325l1.425-1.4L13.4 12l2.35-2.325l-1.425-1.425L12 10.6L9.65 8.25l-1.4 1.425L10.575 12L8.25 14.35zM5 23V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="yxqhu3fju"/>`,
		"fallback": "material-symbols:mobile-cancel-sharp",
	});
}

export default Component;
