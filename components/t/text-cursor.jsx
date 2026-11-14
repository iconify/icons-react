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
		"content": `<style>.dr2zmbegu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5q2.25 0 3 1.5q.75-1.5 3-1.5m-6 17q2.25 0 3-1.5q.75 1.5 3 1.5M12 5v14m-2-7h4");
}
</style><path class="dr2zmbegu"/>`,
		"fallback": "uix-sharp:text-cursor",
	});
}

export default Component;
