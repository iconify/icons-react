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
		"content": `<style>.sn8kgzbvj {
  fill: currentColor;
  d: path("M20.25 3.75a1 1 0 1 1 0 2H3.75a1 1 0 0 1 0-2zm-9.5 3.5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2zm1 8a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1m-1-4.5a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm10.5 8a1 1 0 0 0-1-1H3.75a1 1 0 1 0 0 2h16.5a1 1 0 0 0 1-1m-2-7.75a2.25 2.25 0 0 0-4.5 0v4.75a1 1 0 1 1-2 0V11a4.25 4.25 0 0 1 8.5 0v4.75a1 1 0 1 1-2 0z");
}
</style><path class="sn8kgzbvj"/>`,
		"fallback": "fluent:text-position-square-right-24-filled",
	});
}

export default Component;
