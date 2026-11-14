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
		"content": `<style>.a72hbvktn {
  d: path("M17 7.25a3 3 0 0 0-3-3h-3.5m2-2l-2 2l2 2m2 15.25l.5-2.75L19.75 14L22 16.25L17.25 21Z");
}

.ishww468e {
  d: path("M3.25 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 14a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM5.5 7.25v9.5m9.25-7.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ishww468e"/><path class="a72hbvktn"/></g>`,
		"fallback": "uix-sharp:pull-request-changes",
	});
}

export default Component;
