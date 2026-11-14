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
		"content": `<style>.aty4x2mih {
  d: path("M3 17a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM15.5 3.5l5 5m0-5l-5 5m-9 2.25c0-3 2-4.25 6-4.25");
}

.gss9qvb8e {
  d: path("m10.5 4.5l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aty4x2mih"/><path class="gss9qvb8e"/></g>`,
		"fallback": "uix-sharp:play-diagram",
	});
}

export default Component;
