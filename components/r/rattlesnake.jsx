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
		"content": `<style>.ayz6y5bsf {
  d: path("M15.25 4.75c-6 0-8.5 1.75-8.5 4.25c0 3.5 13 2 13 6.75c0 2.75-3.5 3.75-7.75 3.75");
}

.becenabmq {
  d: path("M15.25 4.75a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Z");
}

.ev07a2ddg {
  d: path("M3.75 17.5H12v4H3.75Zm2.75 0v4m2.75-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="becenabmq"/><path class="ayz6y5bsf"/><path class="ev07a2ddg"/></g>`,
		"fallback": "uix-sharp:rattlesnake",
	});
}

export default Component;
