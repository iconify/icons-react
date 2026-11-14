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
		"content": `<style>.a5jk5wbcp {
  d: path("M2.5 3.5h19v17h-19Zm9.5 0v17M2.5 12h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xiht9r5_j {
  fill: currentColor;
  d: path("M15 14.75h3.75v3H15Z");
}
</style><g class="ulnmmdpxh"><path class="a5jk5wbcp"/><path class="xiht9r5_j"/></g>`,
		"fallback": "uix-sharp:table-cell",
	});
}

export default Component;
