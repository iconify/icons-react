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
		"content": `<style>.hscbn3_7b {
  d: path("M9.75 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-jt02bdi {
  d: path("M4.5 3.5H7V10a5 5 0 0 0 10 0V3.5h2.5M12 15v5.5");
}
</style><g class="ulnmmdpxh"><path class="w-jt02bdi"/><path class="hscbn3_7b"/></g>`,
		"fallback": "uix-sharp:oarlock",
	});
}

export default Component;
