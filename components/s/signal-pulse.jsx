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
		"content": `<style>.zcstlo04q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19h5C9.5 19 10 9 12 9s2.5 10 4.5 10h5M12 5.5h.01");
}
</style><path class="zcstlo04q"/>`,
		"fallback": "uix-sharp:signal-pulse",
	});
}

export default Component;
