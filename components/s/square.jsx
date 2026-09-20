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
		"content": `<style>.re6m6bgki {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2 1v8h8V6z");
}
</style><path clip-rule="evenodd" class="re6m6bgki"/>`,
		"fallback": "pepicons-pop:square",
	});
}

export default Component;
