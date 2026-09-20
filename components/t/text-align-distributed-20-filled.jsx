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
		"content": `<style>.e2eqdzbrn {
  fill: currentColor;
  d: path("M4.78 6.28a.75.75 0 0 0 0-1.06L4.56 5h12.69a.75.75 0 0 0 0-1.5H4.56l.22-.22a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06 0M18 9.25a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 .75.75M2.75 13.5h12.69l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H2.75a.75.75 0 0 1 0-1.5");
}
</style><path class="e2eqdzbrn"/>`,
		"fallback": "fluent:text-align-distributed-20-filled",
	});
}

export default Component;
