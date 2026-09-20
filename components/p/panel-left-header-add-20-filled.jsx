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
		"content": `<style>.j-8q0_qyn {
  fill: currentColor;
  d: path("M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4.257a5.5 5.5 0 0 0-1-.657V8H8.5v7h.522q.047.516.185 1H5a3 3 0 0 1-3-3zm15 0a2 2 0 0 0-2-2H8.5v3H17zm2 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="j-8q0_qyn"/>`,
		"fallback": "fluent:panel-left-header-add-20-filled",
	});
}

export default Component;
