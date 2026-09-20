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
		"content": `<style>.qsrynrgdd {
  fill: currentColor;
  d: path("M4 20V4h5.712v16zm7.096-14.23V4h1.77v1.77zm1.77 1.788V5.769h1.788v1.789zm1.788-1.789V4h1.769v1.77zm3.558 0V4h1.769v1.77zm-1.789 1.789V5.769h1.789v1.789zm-5.327 1.769v-1.77h1.77v1.77zm3.558 0v-1.77h1.769v1.77zm3.558 0v-1.77h1.769v1.77zm-5.346 1.789V9.327h1.788v1.789zm3.557 0V9.327h1.789v1.789zm-5.327 1.769v-1.77h1.77v1.77zm3.558 0v-1.77h1.769v1.77zm3.558 0v-1.77h1.769v1.77zm-5.346 1.788v-1.788h1.788v1.788zm3.557 0v-1.788h1.789v1.788zm-5.327 1.77v-1.77h1.77v1.77zm3.558 0v-1.77h1.769v1.77zm3.558 0v-1.77h1.769v1.77zm-5.346 1.788v-1.789h1.788v1.789zm3.557 0v-1.789h1.789v1.789zM11.096 20v-1.77h1.77V20zm3.558 0v-1.77h1.769V20zm3.558 0v-1.77h1.769V20z");
}
</style><path class="qsrynrgdd"/>`,
		"fallback": "material-symbols-light:transition-fade-outline-sharp",
	});
}

export default Component;
