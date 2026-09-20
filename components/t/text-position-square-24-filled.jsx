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
		"content": `<style>.jqu9edbel {
  fill: currentColor;
  d: path("M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2zm-1 4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1m14.5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-13.5 2.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm13.5 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-13.5 2.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm13.5 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-14.5 3.5a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1m7-7.75a2.25 2.25 0 0 1 4.5 0v4.75a1 1 0 1 0 2 0V11a4.25 4.25 0 0 0-8.5 0v4.75a1 1 0 1 0 2 0z");
}
</style><path class="jqu9edbel"/>`,
		"fallback": "fluent:text-position-square-24-filled",
	});
}

export default Component;
