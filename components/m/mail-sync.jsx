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
		"content": `<style>.j6av-jzwx {
  d: path("M9.5 10.75L12 12.5l2.5-1.75m2-6.544a9 9 0 0 1 0 15.588m-9 0a9 9 0 0 1 0-15.588");
}

.jvz9vmbkl {
  d: path("M7.5 8.75h9v6.5h-9Z");
}

.t32v96bsd {
  d: path("m18.75 20.5l-2.25-.75l.75-2.25M5 3.5l2.5.75l-.75 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jvz9vmbkl"/><path class="j6av-jzwx"/><path class="t32v96bsd"/></g>`,
		"fallback": "uix-sharp:mail-sync",
	});
}

export default Component;
