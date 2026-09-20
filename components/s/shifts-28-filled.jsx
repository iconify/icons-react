import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o7_qvbc-w {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h15.5A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75zm11.5 1.5a.75.75 0 0 0-1.5 0v7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5H14.5z");
}
</style><path class="o7_qvbc-w"/>`,
		"fallback": "fluent:shifts-28-filled",
	});
}

export default Component;
