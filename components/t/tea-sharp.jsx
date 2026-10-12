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
		"content": `<style>.cqqjmibjb {
  d: path("M3.75 9.25h13v6.25a5.5 5.5 0 0 1-5.5 5.5h-2a5.5 5.5 0 0 1-5.5-5.5Zm13 2h1.75a2.25 2.25 0 0 1 0 4.5h-1.75");
}

.ny6bt6mgq {
  d: path("M12.75 9.25V5h-3.5v7.5m-1.75 0H11v3.75H7.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cqqjmibjb"/><path class="ny6bt6mgq"/></g>`,
		"fallback": "iconoven:tea-sharp",
	});
}

export default Component;
