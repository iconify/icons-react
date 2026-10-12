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
		"content": `<style>.lxqglyb3j {
  d: path("M2.75 4.25h18.5v16H2.75z");
}

.umtymsyts {
  d: path("M2.75 5.75L12 11.5l9.25-5.75M12 11.5v3.25a2.25 2.25 0 0 1-4.5 0v-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lxqglyb3j"/><path class="umtymsyts"/></g>`,
		"fallback": "iconoven:spear-phishing-sharp",
	});
}

export default Component;
