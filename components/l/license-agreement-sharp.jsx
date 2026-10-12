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
		"content": `<style>.bdhq7u78x {
  d: path("M18.75 8v13m0-4.5h2m-2 3h2");
}

.q69dqgorn {
  d: path("M2.75 2.75h11.5v18.5H2.75zM6 7h5m-5 3.25h3.5M6 17h5");
}

.wk00ypvul {
  cx: 18.75px;
  cy: 6px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="q69dqgorn"/><circle class="wk00ypvul"/><path class="bdhq7u78x"/></g>`,
		"fallback": "iconoven:license-agreement-sharp",
	});
}

export default Component;
