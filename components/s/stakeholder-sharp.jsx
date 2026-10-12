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
		"content": `<style>.m13zn57lb {
  cx: 6.25px;
  cy: 8.5px;
  r: 2.5px;
}

.rwa_sp96h {
  d: path("M4 19.25h5.25v-.75c0-2.9-1.35-5-3-5s-3 2.1-3 5v.75zm10.75-3.5v-3.5a3.5 3.5 0 1 0 3.5 3.5Zm3-3v-3.5h3.5v3.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="m13zn57lb"/><path class="rwa_sp96h"/></g>`,
		"fallback": "iconoven:stakeholder-sharp",
	});
}

export default Component;
