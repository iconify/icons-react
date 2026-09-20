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
		"content": `<style>.k8z36nb-o {
  fill: currentColor;
  d: path("M14 1a.5.5 0 0 0-1 0v.758A4.5 4.5 0 1 0 15 5.5a.5.5 0 0 0-1 0a3.5 3.5 0 1 1-1.696-3H11.5a.5.5 0 0 0 0 1h2A.5.5 0 0 0 14 3zM3 5h2.022a5.5 5.5 0 0 0 2.522 5.14L7 10.431l-6-3.23V7a2 2 0 0 1 2-2m4.237 6.44l1.411-.76c.579.207 1.202.32 1.852.32c.9 0 1.75-.216 2.5-.6V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8.337l5.763 3.103a.5.5 0 0 0 .474 0");
}
</style><path class="k8z36nb-o"/>`,
		"fallback": "fluent:mail-arrow-clockwise-16-filled",
	});
}

export default Component;
