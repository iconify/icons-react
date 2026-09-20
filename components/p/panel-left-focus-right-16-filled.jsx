import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z7xyocf4l {
  fill: currentColor;
  d: path("M12.004 13a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zM6 4v8H4.004a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z");
}
</style><path class="z7xyocf4l"/>`,
		"fallback": "fluent:panel-left-focus-right-16-filled",
	});
}

export default Component;
