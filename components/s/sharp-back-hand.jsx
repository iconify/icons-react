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
		"content": `<style>.jnufz5xam {
  fill: currentColor;
  d: path("M2.21 10.47L5 9.36L7.25 15H8V2h2.5v10h1V0H14v12h1V1.5h2.5V12h1V4.5H21V16c0 4.42-3.58 8-8 8c-3.26 0-6.19-1.99-7.4-5.02z");
}
</style><path class="jnufz5xam"/>`,
		"fallback": "ic:sharp-back-hand",
	});
}

export default Component;
