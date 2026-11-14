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
		"content": `<style>.rn90y9itc {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-4 15v-3c0-3 3-5 7.5-5s7.5 2 7.5 5v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2ljvhbnj {
  d: path("M9.25 14L12 18.5l2.75-4.5M12 18.5v3");
}
</style><g class="ulnmmdpxh"><path class="rn90y9itc"/><path class="y2ljvhbnj"/></g>`,
		"fallback": "uix-sharp:lab-technician-science",
	});
}

export default Component;
