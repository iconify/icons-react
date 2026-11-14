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
		"content": `<style>.goes4mb5x {
  d: path("M10.055 12.055a2.75 2.75 0 0 1 3.89 0m-5.657-1.767a5.25 5.25 0 0 1 7.424 0");
}

.qsp5rjb-f {
  d: path("M6 2.5h12v19H6ZM10.5 18h3M12 14h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qsp5rjb-f"/><path class="goes4mb5x"/></g>`,
		"fallback": "uix-sharp:smartphone-wifi",
	});
}

export default Component;
