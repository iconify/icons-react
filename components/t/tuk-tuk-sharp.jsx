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
		"content": `<style>.fonf8kbkq {
  d: path("M4.5 3h16.25l-.21 1.23l-1.08 6.54l-.21 1.23l-1.01.74l-1.73 1.27l-1.01.74h-7l-1.01-.74l-1.73-1.27L4.75 12l-.21-1.23l-1.08-6.54L3.25 3z");
}

.j1-unv-pk {
  cx: 12px;
  cy: 19.5px;
  r: 1.75px;
}

.ronouzbjo {
  d: path("M7.75 6H17l-.13.74l-.49 2.77l-.13.74h-8.5l-.13-.74l-.49-2.77L7 6z");
}

.rvnjmbb9n {
  d: path("M3.5 17.5h3v3.75h-3zm14 0h3v3.75h-3z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fonf8kbkq"/><path class="ronouzbjo"/><circle class="j1-unv-pk"/><path class="rvnjmbb9n"/></g>`,
		"fallback": "iconoven:tuk-tuk-sharp",
	});
}

export default Component;
