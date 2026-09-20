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
		"content": `<style>.jbr38ov7b {
  fill: currentColor;
  d: path("M17 20V7h4v13zM10 7h4V5h-4zM8 20V7h1V4h6v3h1v13zm-5 0V7h4v13z");
}
</style><path class="jbr38ov7b"/>`,
		"fallback": "material-symbols-light:trip-sharp",
	});
}

export default Component;
