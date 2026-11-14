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
		"content": `<style>.ild13qbit {
  d: path("M8 21.5V6h8v15.5M13.25 14h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zj6v1sbwt {
  d: path("M4.5 21.5V4A1.5 1.5 0 0 1 6 2.5h12A1.5 1.5 0 0 1 19.5 4v17.5m-17 0h19");
}
</style><g class="ulnmmdpxh"><path class="zj6v1sbwt"/><path class="ild13qbit"/></g>`,
		"fallback": "uix-sharp:private-office-door",
	});
}

export default Component;
