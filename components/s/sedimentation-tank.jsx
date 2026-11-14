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
		"content": `<style>.a1r6jp_9t {
  d: path("M4 4.5V14l6.5 4.5h3L20 14V4.5M6.75 11h10.5M12 18.5v3");
}

.nak6rsenb {
  d: path("M4 4.5a8 2 0 1 0 16 0a8 2 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nak6rsenb"/><path class="a1r6jp_9t"/></g>`,
		"fallback": "uix-sharp:sedimentation-tank",
	});
}

export default Component;
