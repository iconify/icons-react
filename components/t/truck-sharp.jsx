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
		"content": `<style>.c404t1u9v {
  cx: 17px;
  cy: 19.25px;
  r: 1.5px;
}

.mzom_1bkh {
  d: path("M2.75 6.25v-1.5h12v3.5h3.955l.445.67L21 11.7l.249.283l.001.377V15H2.75v-1.5Zm12 2V15");
}

.w0wkfousa {
  cx: 7.25px;
  cy: 19.25px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mzom_1bkh"/><circle class="w0wkfousa"/><circle class="c404t1u9v"/></g>`,
		"fallback": "iconoven:truck-sharp",
	});
}

export default Component;
