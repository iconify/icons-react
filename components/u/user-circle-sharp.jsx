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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.dnqtwob4n {
  d: path("M6.25 18.4c1.3-1.85 3.4-3.15 5.75-3.15s4.45 1.3 5.75 3.15");
}

.qexqi5bar {
  cx: 12px;
  cy: 9.5px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><circle class="qexqi5bar"/><path class="dnqtwob4n"/></g>`,
		"fallback": "iconoven:user-circle-sharp",
	});
}

export default Component;
