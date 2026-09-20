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
		"content": `<style>.gp577nbqp {
  fill: currentColor;
  d: path("M4.7 3.6a.75.75 0 1 0-.901-1.2A6.99 6.99 0 0 0 1 8a6.99 6.99 0 0 0 2.799 5.6a.75.75 0 0 0 .9-1.2A5.49 5.49 0 0 1 2.5 8a5.49 5.49 0 0 1 2.2-4.4m7.5-1.2a.75.75 0 1 0-.9 1.2A5.49 5.49 0 0 1 13.5 8a5.49 5.49 0 0 1-2.2 4.4a.75.75 0 1 0 .901 1.2A6.99 6.99 0 0 0 15 8a6.99 6.99 0 0 0-2.799-5.6M5.75 7.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="gp577nbqp"/>`,
		"fallback": "fluent:subtract-parentheses-16-filled",
	});
}

export default Component;
