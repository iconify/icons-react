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
		"content": `<style>.bfwiu2w4e {
  d: path("m8.5 5.5l-4 4l4 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzmnvky3g {
  d: path("M4.5 9.5h10a5 5 0 0 1 0 10H9");
}
</style><g class="ulnmmdpxh"><path class="vzmnvky3g"/><path class="bfwiu2w4e"/></g>`,
		"fallback": "uix-sharp:undo",
	});
}

export default Component;
