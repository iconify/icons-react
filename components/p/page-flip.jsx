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
		"content": `<style>.ghps-vbfg {
  d: path("M2.5 8L12 9.5L21.5 8v11.5L12 21l-9.5-1.5ZM12 9.5V21");
}

.kzvvtbcfd {
  d: path("M12 9.5c.5-4 3.5-6.5 7.5-7l2 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ghps-vbfg"/><path class="kzvvtbcfd"/></g>`,
		"fallback": "uix-sharp:page-flip",
	});
}

export default Component;
