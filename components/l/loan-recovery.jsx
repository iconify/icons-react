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
		"content": `<style>.o3d8aendp {
  d: path("M6 2.5h12m-6 0v3m0 0V8a1.75 1.75 0 0 1-3.5 0m-1.25 8.75a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Z");
}

.uc4ot1bkm {
  d: path("M13.5 15.25q-.375-.75-1.5-.75c-.75 0-1.5.25-1.5 1c0 1.25 3 .75 3 2.5c0 .5-.75 1-1.5 1q-1.125 0-1.5-.75M12 13.5v1m0 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o3d8aendp"/><path class="uc4ot1bkm"/></g>`,
		"fallback": "uix-sharp:loan-recovery",
	});
}

export default Component;
