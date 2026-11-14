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
		"content": `<style>.anwf4h-1y {
  d: path("M9.25 15H5.5m2-2l-2 2l2 2m7.25-2h3.75m-2-2l2 2l-2 2");
}

.udgrlbscn {
  d: path("M2.5 3.5h19v17h-19Zm0 5.5h19M12 9v11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="udgrlbscn"/><path class="anwf4h-1y"/></g>`,
		"fallback": "uix-sharp:table-split",
	});
}

export default Component;
