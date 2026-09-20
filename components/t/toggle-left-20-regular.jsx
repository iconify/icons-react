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
		"content": `<style>.veluvebuc {
  fill: currentColor;
  d: path("M6 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m12-2a4 4 0 0 0-4-4H6a4 4 0 1 0 0 8h8a4 4 0 0 0 4-4m-4-3a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6z");
}
</style><path class="veluvebuc"/>`,
		"fallback": "fluent:toggle-left-20-regular",
	});
}

export default Component;
