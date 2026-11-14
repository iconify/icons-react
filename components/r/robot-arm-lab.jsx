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
		"content": `<style>.demw1x76o {
  d: path("M8 16.5V13l5.5-5.5");
}

.meomiab5t {
  d: path("M4.5 21.5V20a3.5 3.5 0 0 1 7 0v1.5Z");
}

.u1g47cbvf {
  d: path("m14.25 2.25l-3 3l4.5 4.5l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="meomiab5t"/><path class="demw1x76o"/><path class="u1g47cbvf"/></g>`,
		"fallback": "uix-sharp:robot-arm-lab",
	});
}

export default Component;
