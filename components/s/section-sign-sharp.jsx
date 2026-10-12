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
		"content": `<style>.im-7-3bcs {
  d: path("M16.5 5.25c-.75-1-2.25-1.75-4.25-1.75c-2.5 0-4 1.25-4 3c0 4 8.75 3.5 8.75 8v1.95l-2 .8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zbb2sshrs {
  d: path("M7.5 18.75c.75 1 2.25 1.75 4.25 1.75c2.5 0 4-1.25 4-3c0-4-8.75-3.5-8.75-8V7.55l2-.8");
}
</style><g class="x2cwu0gfd"><path class="im-7-3bcs"/><path class="zbb2sshrs"/></g>`,
		"fallback": "iconoven:section-sign-sharp",
	});
}

export default Component;
