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
		"content": `<style>.aak4idb2j {
  fill: currentColor;
  d: path("M16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zM7 5v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z");
}
</style><path class="aak4idb2j"/>`,
		"fallback": "fluent:panel-left-focus-right-20-filled",
	});
}

export default Component;
