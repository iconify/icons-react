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
		"content": `<style>.avxvf44ok {
  fill: currentColor;
  d: path("M2 10c0 1.803 1.555 3.653 4.222 3.957A5.48 5.48 0 0 1 5 10.5c0-.9.216-1.75.6-2.5H3.5A1.5 1.5 0 0 0 2 9.5zm4.327-3.083A5.5 5.5 0 0 1 9.626 5.07a2.75 2.75 0 1 0-3.299 1.848M15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M10.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 0-1h-1V8.5a.5.5 0 0 0-.5-.5");
}
</style><path class="avxvf44ok"/>`,
		"fallback": "fluent:person-clock-16-filled",
	});
}

export default Component;
