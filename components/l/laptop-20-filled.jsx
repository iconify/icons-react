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
		"content": `<style>.o-t_2gbvx {
  fill: currentColor;
  d: path("M17.5 15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zM15 5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z");
}
</style><path class="o-t_2gbvx"/>`,
		"fallback": "fluent:laptop-20-filled",
	});
}

export default Component;
