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
		"content": `<style>.cuwf8hb0u {
  d: path("M13.328 17H2.5C2.5 1.933 17.425.22 20.819 11.861");
}

.fkn2dzb9n {
  d: path("M7 17c0-5.5 5-5.5 5 0m4-1.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cuwf8hb0u"/><path class="fkn2dzb9n"/></g>`,
		"fallback": "uix-sharp:one-person-tent",
	});
}

export default Component;
