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
		"content": `<style>.j2u-_b3nc {
  d: path("M7.5 6h9v9h-9Zm0 4h9m-7.25 8h.01M14 18h.01");
}

.jd59lkbpy {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0Zm3-6.75l13.5 13.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jd59lkbpy"/><path class="j2u-_b3nc"/></g>`,
		"fallback": "uix-sharp:no-buses-sign",
	});
}

export default Component;
