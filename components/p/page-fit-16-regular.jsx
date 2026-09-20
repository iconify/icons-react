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
		"content": `<style>.hbskapb6q {
  fill: currentColor;
  d: path("M3 6a1 1 0 0 1 1-1h1a.5.5 0 0 1 0 1H4v1a.5.5 0 0 1-1 0zm10 0a1 1 0 0 0-1-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0zm0 4a1 1 0 0 1-1 1h-1a.5.5 0 0 1 0-1h1V9a.5.5 0 0 1 1 0zM3 10a1 1 0 0 0 1 1h1a.5.5 0 0 0 0-1H4V9a.5.5 0 0 0-1 0zm0-7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z");
}
</style><path class="hbskapb6q"/>`,
		"fallback": "fluent:page-fit-16-regular",
	});
}

export default Component;
