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
		"content": `<style>.askjmlbex {
  d: path("M2.75 3h18.5");
}

.qx7xrvl5u {
  d: path("m5.5 3l4 7.5h5l4-7.5M12 10.5V15m0 0l-1.25 6.25M12 15l1.25 6.25");
}

.sdggh2xtg {
  cx: 12px;
  cy: 6.75px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="askjmlbex"/><circle class="sdggh2xtg"/><path class="qx7xrvl5u"/></g>`,
		"fallback": "iconoven:pull-up-bar-sharp",
	});
}

export default Component;
