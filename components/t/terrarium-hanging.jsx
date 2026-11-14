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
		"content": `<style>.ju24f_bnl {
  d: path("M12 14.75c0-1.75 1.25-2.5 3-2.5c0 1.75-1.25 2.5-3 2.5ZM12 16c0-1.75-1.25-2.75-3-2.75C9 15 10.25 16 12 16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xz4x93qxc {
  d: path("M10.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM12 5v2m0 0l9 5.5l-3 9H6l-3-9Zm0 11.75v-4");
}
</style><g class="ulnmmdpxh"><path class="xz4x93qxc"/><path class="ju24f_bnl"/></g>`,
		"fallback": "uix-sharp:terrarium-hanging",
	});
}

export default Component;
