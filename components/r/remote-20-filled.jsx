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
		"content": `<style>.ojv1mffei {
  fill: currentColor;
  d: path("M16.97 15.03a.75.75 0 1 0 1.06-1.06L12.56 8.5l5.47-5.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 0 0 0 1.06zM3.03 4.97a.75.75 0 0 0-1.06 1.06l5.47 5.47l-5.47 5.47a.75.75 0 1 0 1.06 1.06l6-6a.75.75 0 0 0 0-1.06z");
}
</style><path class="ojv1mffei"/>`,
		"fallback": "fluent:remote-20-filled",
	});
}

export default Component;
