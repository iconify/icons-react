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
		"content": `<style>.jd59lkbpy {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0Zm3-6.75l13.5 13.5");
}

.o7vhhzbjl {
  d: path("M14.5 6.5L17 9l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvokt6bxl {
  d: path("M9.5 17.5v-6A2.5 2.5 0 0 1 12 9h5");
}
</style><g class="ulnmmdpxh"><path class="jd59lkbpy"/><path class="wvokt6bxl"/><path class="o7vhhzbjl"/></g>`,
		"fallback": "uix-sharp:no-right-turn",
	});
}

export default Component;
