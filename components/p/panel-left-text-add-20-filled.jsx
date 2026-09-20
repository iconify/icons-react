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
		"content": `<style>.b3-djybvv {
  fill: currentColor;
  d: path("M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4.257a5.5 5.5 0 0 0-1-.657V6a2 2 0 0 0-2-2H9v11h.022q.047.516.185 1H5a3 3 0 0 1-3-3zm4.59.992A.5.5 0 0 0 6.5 6h-2l-.09.008A.5.5 0 0 0 4.5 7h2zm0 3A.5.5 0 0 0 6.5 9h-2l-.09.008A.5.5 0 0 0 4.5 10h2zM7 12.5a.5.5 0 0 0-.5-.5h-2l-.09.008A.5.5 0 0 0 4.5 13h2l.09-.008A.5.5 0 0 0 7 12.5m12 2a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="b3-djybvv"/>`,
		"fallback": "fluent:panel-left-text-add-20-filled",
	});
}

export default Component;
