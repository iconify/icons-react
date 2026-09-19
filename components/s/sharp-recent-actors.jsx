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
		"content": `<style>.uqczb2b8r {
  fill: currentColor;
  d: path("M21 5v14h2V5zm-4 14h2V5h-2zM15 5H1v14h14zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25S5.75 11.24 5.75 10S6.76 7.75 8 7.75M12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25z");
}
</style><path class="uqczb2b8r"/>`,
		"fallback": "ic:sharp-recent-actors",
	});
}

export default Component;
