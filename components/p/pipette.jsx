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
		"content": `<style>.vsmgsnbqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.704 2.893l3.447 2.893l-3.856 4.596l-3.447-2.892Zm-3.412 5.622l1.915 1.607l-5.785 6.895l-2.886 1.494l.971-3.101Zm-1.34-1.125l4.596 3.857");
}
</style><path class="vsmgsnbqh"/>`,
		"fallback": "uix-sharp:pipette",
	});
}

export default Component;
