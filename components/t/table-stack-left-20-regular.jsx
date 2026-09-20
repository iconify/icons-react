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
		"content": `<style>.t8yhxg7hz {
  fill: currentColor;
  d: path("M3.5 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5m5 0a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5H15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm4.5-1h2a1 1 0 0 0 1-1v-2h-3zm3-8h-3v4h3zm0-1V5a1 1 0 0 0-1-1h-2v3zm-4 0V4H9v3zM9 8v4h3V8zm0 8h3v-3H9z");
}
</style><path class="t8yhxg7hz"/>`,
		"fallback": "fluent:table-stack-left-20-regular",
	});
}

export default Component;
