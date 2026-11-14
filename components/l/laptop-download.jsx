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
		"content": `<style>.nqrh00bso {
  d: path("M9.75 9.75L12 12l2.25-2.25");
}

.sget-mber {
  d: path("M4.5 4.5h15v11h-15Zm-2 14h19M12 6.5V12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sget-mber"/><path class="nqrh00bso"/></g>`,
		"fallback": "uix-sharp:laptop-download",
	});
}

export default Component;
