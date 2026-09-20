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
		"content": `<style>.lr51hiq9y {
  fill: currentColor;
  d: path("m6.821 10.5l.998.874a.5.5 0 0 1-.658.752l-2-1.75a.5.5 0 0 1 0-.752l2-1.75a.5.5 0 0 1 .658.752l-.998.874H10.5a.5.5 0 0 1 0 1zM18 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-6 1V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z");
}
</style><path class="lr51hiq9y"/>`,
		"fallback": "fluent:panel-right-expand-20-filled",
	});
}

export default Component;
