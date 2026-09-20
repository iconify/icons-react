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
		"content": `<style>.d3cw9cbqn {
  fill: currentColor;
  d: path("M2 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V6h6a3 3 0 0 1 3 3v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a3 3 0 0 1 3-3h1V4H2.5a.5.5 0 0 1-.5-.5zm3 8V7H4a2 2 0 0 0-2 2v5h7V9c0-.768.289-1.47.764-2H6v2.5a.5.5 0 0 1-1 0m9-.5a2 2 0 1 0-4 0v5h4zm-2.5 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="d3cw9cbqn"/>`,
		"fallback": "fluent:mailbox-16-regular",
	});
}

export default Component;
