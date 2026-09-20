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
		"content": `<style>.l_ycvkblf {
  fill: currentColor;
  d: path("M12.22 6.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L16.19 10z");
}
</style><path class="l_ycvkblf"/>`,
		"fallback": "fluent:ios-chevron-right-20-filled",
	});
}

export default Component;
