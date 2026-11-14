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
		"content": `<style>.n_p-64byt {
  d: path("M5.25 8.25h5.5v7.5h-5.5Zm0 3.75h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxtluvbuc {
  d: path("M3.5 5.5h9a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Zm10 6.5h7.75M18 12v3.25M21.25 12v3.25");
}
</style><g class="ulnmmdpxh"><path class="uxtluvbuc"/><path class="n_p-64byt"/></g>`,
		"fallback": "uix-sharp:prepayment-key",
	});
}

export default Component;
