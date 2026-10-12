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
		"content": `<style>.c2vbuccni {
  cx: 12px;
  cy: 10.5px;
  r: 3.5px;
}

.ha2z4qbtg {
  d: path("M2.75 3h18.5v15H2.75z");
}

.hdj66lbws {
  d: path("M6 21.25h12");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ha2z4qbtg"/><circle class="c2vbuccni"/><path class="hdj66lbws"/></g>`,
		"fallback": "iconoven:mri-scanner-sharp",
	});
}

export default Component;
