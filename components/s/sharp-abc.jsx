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
		"content": `<style>.elav66bmh {
  fill: currentColor;
  d: path("M21 11h-1.5v-.5h-2v3h2V13H21v2h-5V9h5zM8 9v6H6.5v-1.5h-2V15H3V9zm-1.5 1.5h-2V12h2zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M11 10.5v.75h2v-.75zm2 2.25h-2v.75h2z");
}
</style><path class="elav66bmh"/>`,
		"fallback": "ic:sharp-abc",
	});
}

export default Component;
