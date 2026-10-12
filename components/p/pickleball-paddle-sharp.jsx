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
		"content": `<style>.bf9_qabtn {
  cx: 17.5px;
  cy: 17.5px;
  r: 3.5px;
}

.nml8oibyg {
  d: path("M3.25 2.75h9.5v11.5h-9.5zm3.25 11.5h3v7h-3z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xaehkvbgh {
  d: path("M16.65 18.35h.01m1.69-1.7h.01");
}
</style><g class="x2cwu0gfd"><path class="nml8oibyg"/><circle class="bf9_qabtn"/><path class="xaehkvbgh"/></g>`,
		"fallback": "iconoven:pickleball-paddle-sharp",
	});
}

export default Component;
