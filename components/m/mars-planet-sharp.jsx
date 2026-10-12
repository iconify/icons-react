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
		"content": `<style>.hkmqn_bmj {
  d: path("M4.96 6h14.08A9.25 9.25 0 1 1 4.96 6Zm0 0h14.08A9.25 9.25 0 0 0 4.96 6Z");
}

.oruds0ork {
  cx: 15.25px;
  cy: 16px;
  r: 1.5px;
}

.pbit6lbsn {
  cx: 9px;
  cy: 12.5px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hkmqn_bmj"/><circle class="pbit6lbsn"/><circle class="oruds0ork"/></g>`,
		"fallback": "iconoven:mars-planet-sharp",
	});
}

export default Component;
