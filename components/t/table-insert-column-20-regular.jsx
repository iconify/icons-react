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
		"content": `<style>.wxaw9vb0z {
  fill: currentColor;
  d: path("M4 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm13 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM9 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1 9V8h4v4zm4-7v2H8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1m-4 8h4v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z");
}
</style><path class="wxaw9vb0z"/>`,
		"fallback": "fluent:table-insert-column-20-regular",
	});
}

export default Component;
