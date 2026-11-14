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
		"content": `<style>.o7pus3-sc {
  d: path("M12 2.5S4.5 10 4.5 14a7.5 7.5 0 0 0 15 0c0-4-7.5-11.5-7.5-11.5Z");
}

.oi2k1ybem {
  d: path("M14 11.036a4 4 0 0 1 0 6.928m-4 0a4 4 0 0 1 0-6.928");
}

.sl7c_bb_c {
  d: path("m16 18.5l-2-.5l.5-2m-5-3l.5-2l-2-.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o7pus3-sc"/><path class="oi2k1ybem"/><path class="sl7c_bb_c"/></g>`,
		"fallback": "uix-sharp:oil-recycling",
	});
}

export default Component;
