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
		"content": `<style>.cve3umbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6.5 14L12 9.5l5.5 4.5M12 9.5V15m-2.5 6.5L12 15l2.5 6.5m-10-12h4m-2 0v12m9-12h4m-2 0v12");
}
</style><path class="cve3umbxh"/>`,
		"fallback": "uix-sharp:person-crutches",
	});
}

export default Component;
