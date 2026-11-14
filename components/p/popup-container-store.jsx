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
		"content": `<style>.jr_icmb2j {
  d: path("M13.75 8.5h5V19h-5ZM2.5 21.5h19");
}

.jyj93sono {
  d: path("M2.5 5.5h19V19h-19Zm3 2.5v8.5M8.25 8v8.5M11 8v8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jyj93sono"/><path class="jr_icmb2j"/></g>`,
		"fallback": "uix-sharp:popup-container-store",
	});
}

export default Component;
