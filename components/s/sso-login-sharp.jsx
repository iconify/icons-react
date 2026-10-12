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
		"content": `<style>.bfbj0lbyp {
  d: path("M10.75 8.25L14.5 12l-3.75 3.75");
}

.pi1uazr6y {
  d: path("M13 2.75h8.25v18.5H13M3 12h11.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pi1uazr6y"/><path class="bfbj0lbyp"/></g>`,
		"fallback": "iconoven:sso-login-sharp",
	});
}

export default Component;
