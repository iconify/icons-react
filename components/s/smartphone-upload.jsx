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
		"content": `<style>.sb0axvnbu {
  d: path("M6 2.5h12v19H6ZM10.5 18h3M12 11.5V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymm7jyq0l {
  d: path("M9.5 8.5L12 6l2.5 2.5m-5.5 6h6");
}
</style><g class="ulnmmdpxh"><path class="sb0axvnbu"/><path class="ymm7jyq0l"/></g>`,
		"fallback": "uix-sharp:smartphone-upload",
	});
}

export default Component;
