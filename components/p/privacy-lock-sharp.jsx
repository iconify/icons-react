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
		"content": `<style>.cvk--017m {
  cx: 12px;
  cy: 14.25px;
  r: 1.5px;
}

.d7e32ebyd {
  d: path("M9.5 18.5a2.5 2.5 0 0 1 5 0");
}

.ov_oyfwpb {
  d: path("M8 10.25V7.5a4 4 0 0 1 8 0v2.75m-11.75 0h15.5v11H4.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ov_oyfwpb"/><circle class="cvk--017m"/><path class="d7e32ebyd"/></g>`,
		"fallback": "iconoven:privacy-lock-sharp",
	});
}

export default Component;
