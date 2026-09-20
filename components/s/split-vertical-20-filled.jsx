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
		"content": `<style>.zvtl5ccpl {
  fill: currentColor;
  d: path("M10 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zM2 6a2 2 0 0 1 2-2h4v12H4a2 2 0 0 1-2-2zm9 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4z");
}
</style><path class="zvtl5ccpl"/>`,
		"fallback": "fluent:split-vertical-20-filled",
	});
}

export default Component;
