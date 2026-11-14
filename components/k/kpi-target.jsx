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
		"content": `<style>.co8hw7g9k {
  d: path("M12.25 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25 0h.01");
}

.crutoh6uu {
  d: path("M2.5 4.5h19v15h-19ZM6 9h4m-4 5.5h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="crutoh6uu"/><path class="co8hw7g9k"/></g>`,
		"fallback": "uix-sharp:kpi-target",
	});
}

export default Component;
