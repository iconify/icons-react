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
		"content": `<style>.sa58dlnzp {
  fill: currentColor;
  d: path("M4 18.75A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75V5.25A3.25 3.25 0 0 0 16.75 2h-9.5A3.25 3.25 0 0 0 4 5.25z");
}
</style><path class="sa58dlnzp"/>`,
		"fallback": "fluent:rectangle-portrait-24-filled",
	});
}

export default Component;
