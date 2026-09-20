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
		"content": `<style>.r68c9acbr {
  fill: currentColor;
  d: path("M6.5 13a.5.5 0 0 1 .09.992L6.5 14h-2a.5.5 0 0 1-.09-.992L4.5 13zm0-3.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0-3.5a.5.5 0 0 1 .09.992L6.5 7h-2a.5.5 0 0 1-.09-.992L4.5 6zM15 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM5 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3V4zm4 0v12h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z");
}
</style><path class="r68c9acbr"/>`,
		"fallback": "fluent:panel-left-text-20-regular",
	});
}

export default Component;
