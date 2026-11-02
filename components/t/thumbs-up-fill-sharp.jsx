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
		"content": `<style>.r17vrp05l {
  fill: currentColor;
  d: path("M8 22V8.83A3.01 3.01 0 0 0 10 6V5a3 3 0 1 1 6 0v4h5a1 1 0 0 1 1 1v4q0 .14-.038.275l-2 7A1 1 0 0 1 19 22Zm-2 0H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3Z");
}
</style><path class="r17vrp05l"/>`,
		"fallback": "coolicons:thumbs-up-fill-sharp",
	});
}

export default Component;
