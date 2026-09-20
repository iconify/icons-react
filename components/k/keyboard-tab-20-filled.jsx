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
		"content": `<style>.rb582bc8e {
  fill: currentColor;
  d: path("M17 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm-8.47-.53a.75.75 0 0 0-1.06 1.06l3.97 3.97H2.75a.75.75 0 0 0 0 1.5h8.69l-3.97 3.97a.75.75 0 1 0 1.06 1.06l5.25-5.25a.75.75 0 0 0 0-1.06z");
}
</style><path class="rb582bc8e"/>`,
		"fallback": "fluent:keyboard-tab-20-filled",
	});
}

export default Component;
