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
		"content": `<style>.apt6s_sml {
  d: path("M2.5 10a9.5 7.5 0 1 0 19 0a9.5 7.5 0 1 0-19 0Z");
}

.n3zrl5mfv {
  d: path("M2.5 10v3.5a9.5 7.5 0 0 0 19 0V10");
}

.o2ly5bbut {
  d: path("M9 12.75a3 2.25 0 1 0 6 0a3 2.25 0 1 0-6 0Zm-1-4h.01m3.99-2h.01m3.99 2h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="apt6s_sml"/><path class="n3zrl5mfv"/><path class="o2ly5bbut"/></g>`,
		"fallback": "uix-sharp:paw-balm",
	});
}

export default Component;
