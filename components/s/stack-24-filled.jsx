import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tl3meq73p {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm2.5 13.5A2 2 0 0 1 4.563 16H15.5a2.5 2.5 0 0 0 2.5-2.5V6.563A2 2 0 0 1 19.5 8.5v5a4 4 0 0 1-4 4zM9 20a2 2 0 0 1-1.937-1.5h9.187a4.25 4.25 0 0 0 4.25-4.25V9.063A2 2 0 0 1 22 11v3.25A5.75 5.75 0 0 1 16.25 20z");
}
</style><path class="tl3meq73p"/>`,
		"fallback": "fluent:stack-24-filled",
	});
}

export default Component;
