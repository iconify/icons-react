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
		"content": `<style>.n7_14wbwe {
  fill: currentColor;
  d: path("M16.75 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M2 12a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5m5-3.5a3.5 3.5 0 1 0 0 7h10a3.5 3.5 0 1 0 0-7z");
}
</style><path class="n7_14wbwe"/>`,
		"fallback": "fluent:toggle-right-24-regular",
	});
}

export default Component;
