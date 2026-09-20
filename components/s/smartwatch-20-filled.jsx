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
		"content": `<style>.v7j3rwbbc {
  fill: currentColor;
  d: path("M8 2a2 2 0 0 0-2 2v.17c.313-.11.65-.17 1-.17h6c.35 0 .687.06 1 .17V4a2 2 0 0 0-2-2zM7 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1V7a2 2 0 0 0-2-2zm0 11c-.35 0-.687-.06-1-.17V16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17z");
}
</style><path class="v7j3rwbbc"/>`,
		"fallback": "fluent:smartwatch-20-filled",
	});
}

export default Component;
