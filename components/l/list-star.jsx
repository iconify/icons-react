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
		"content": `<style>.kys56ljju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5h.01M8 5.5h12.5M4 11.5h.01m3.99 0h12.5M4 17.5h.01m3.99 0h4m6-2.75l1.029 1.834l2.062.412l-1.427 1.545l.246 2.088L18 19.75l-1.91.879l.246-2.088l-1.427-1.545l2.062-.412Z");
}
</style><path class="kys56ljju"/>`,
		"fallback": "uix-sharp:list-star",
	});
}

export default Component;
