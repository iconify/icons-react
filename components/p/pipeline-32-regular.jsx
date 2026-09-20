import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qx9xa_uch {
  fill: currentColor;
  d: path("M2 9a3 3 0 0 1 6 0h16a3 3 0 1 1 6 0v14a3 3 0 1 1-6 0H8a3 3 0 1 1-6 0zm4 0a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0zm2 12h16V11H8zM28 9a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0z");
}
</style><path class="qx9xa_uch"/>`,
		"fallback": "fluent:pipeline-32-regular",
	});
}

export default Component;
