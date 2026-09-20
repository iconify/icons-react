import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ruywk3bih {
  fill: currentColor;
  d: path("M10.75 4a.75.75 0 0 0 0 1.5h3.883l-4.455 5.265A.75.75 0 0 0 10.75 12h5.5a.75.75 0 0 0 0-1.5h-3.883l4.456-5.266A.75.75 0 0 0 16.25 4zm-7 6a.75.75 0 0 0 0 1.5h1.967l-2.559 3.29A.75.75 0 0 0 3.75 16h3.5a.75.75 0 0 0 0-1.5H5.283l2.559-3.29A.75.75 0 0 0 7.25 10z");
}
</style><path class="ruywk3bih"/>`,
		"fallback": "fluent:snooze-20-filled",
	});
}

export default Component;
