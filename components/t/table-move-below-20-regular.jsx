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
		"content": `<style>.irezlgb9u {
  fill: currentColor;
  d: path("M17 16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1 0-1h13a.5.5 0 0 1 .5.5m-.5-4.5h-3.882l-.057-.06a1.5 1.5 0 0 0-.561-.355V8H8v3.585a1.5 1.5 0 0 0-.618.415H3.5a.5.5 0 0 1-.5-.5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-.5.5M16 7V5a1 1 0 0 0-1-1h-2v3zM8 4v3h4V4zM7 4H5a1 1 0 0 0-1 1v2h3zm0 4H4v3h3zm9 3V8h-3v3zm-7.146 1.646a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793z");
}
</style><path class="irezlgb9u"/>`,
		"fallback": "fluent:table-move-below-20-regular",
	});
}

export default Component;
