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
		"content": `<style>.el66hz51u {
  fill: currentColor;
  d: path("M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2zm9.5 3.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-1 8a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m1-4.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-10.5 8a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1m2-7.75a2.25 2.25 0 0 1 4.5 0v4.75a1 1 0 1 0 2 0V11a4.25 4.25 0 0 0-8.5 0v4.75a1 1 0 1 0 2 0z");
}
</style><path class="el66hz51u"/>`,
		"fallback": "fluent:text-position-square-left-24-filled",
	});
}

export default Component;
