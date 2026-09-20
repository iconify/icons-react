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
		"content": `<style>.wjm179syi {
  fill: currentColor;
  d: path("M4 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm13 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM9 3a2 2 0 0 0-2 2v2h6V5a2 2 0 0 0-2-2zm-2 9V8h6v4zm0 1h6v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z");
}
</style><path class="wjm179syi"/>`,
		"fallback": "fluent:table-insert-column-20-filled",
	});
}

export default Component;
