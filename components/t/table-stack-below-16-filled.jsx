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
		"content": `<style>.r8e--nbuc {
  fill: currentColor;
  d: path("M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1zM5 10H2.5a.5.5 0 0 1-.5-.5V6h3zm1 0h4V6H6zm8-4v3.5a.5.5 0 0 1-.5.5H11V6zm-3-1h3v-.5A2.5 2.5 0 0 0 11.5 2H11zm-1-3H6v3h4zM4.5 2H5v3H2v-.5A2.5 2.5 0 0 1 4.5 2");
}
</style><path class="r8e--nbuc"/>`,
		"fallback": "fluent:table-stack-below-16-filled",
	});
}

export default Component;
