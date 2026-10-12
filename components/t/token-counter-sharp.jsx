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
		"content": `<style>.ekggvtblj {
  cx: 8.75px;
  cy: 12px;
  r: 6px;
}

.ova03jb8f {
  d: path("M6.25 9.5h5m-2.5 0V15M19 9.75v4.5M16.75 12h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ekggvtblj"/><path class="ova03jb8f"/></g>`,
		"fallback": "iconoven:token-counter-sharp",
	});
}

export default Component;
