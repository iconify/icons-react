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
		"content": `<style>.mns09ub-p {
  d: path("M6 8a6 6 0 1 0 12 0A6 6 0 1 0 6 8Zm6 9v4.75m-2.75-2L12 17l2.75 2.75");
}

.n6p-2nbyt {
  d: path("M12 2c-1.75 2.25-1.75 4.5 0 6m0 0c2-.5 4 .5 5.25 3M12 8c.25 2.25-2.5 3.5-5.25 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mns09ub-p"/><path class="n6p-2nbyt"/></g>`,
		"fallback": "uix-sharp:volleyball-serve",
	});
}

export default Component;
