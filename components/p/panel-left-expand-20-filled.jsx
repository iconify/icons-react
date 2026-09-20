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
		"content": `<style>.libgemtoh {
  fill: currentColor;
  d: path("m13.179 10.5l-.998.874a.5.5 0 0 0 .658.752l2-1.75a.5.5 0 0 0 0-.752l-2-1.75a.5.5 0 1 0-.659.752l1 .874H9.5a.5.5 0 0 0 0 1zM2 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm6 1V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z");
}
</style><path class="libgemtoh"/>`,
		"fallback": "fluent:panel-left-expand-20-filled",
	});
}

export default Component;
