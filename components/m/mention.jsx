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
		"content": `<style>.ecjiacbfy {
  d: path("M13.5 10v2.75a1.25 1.25 0 0 0 2.5 0V12a4.25 4.25 0 1 0-2 3.75");
}

.hpkep8bsv {
  d: path("m7.5 19.5l-3.5 1L5 17a8.5 8.5 0 1 1 2.5 2.5Z");
}

.t-t6zsj_c {
  d: path("M9.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpkep8bsv"/><path class="t-t6zsj_c"/><path class="ecjiacbfy"/></g>`,
		"fallback": "uix-sharp:mention",
	});
}

export default Component;
