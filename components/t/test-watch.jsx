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
		"content": `<style>.hol9pewyh {
  d: path("M6 10c1.5-2.5 3.5-3.5 6-3.5s4.5 1 6 3.5c-1.5 2.5-3.5 3.5-6 3.5s-4.5-1-6-3.5Z");
}

.rn6jsgbjf {
  fill: currentColor;
  d: path("M10.5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umf6o6u3u {
  d: path("M2.5 3h19v14h-19ZM12 17v4m-3.5 0h7");
}
</style><g class="ulnmmdpxh"><path class="umf6o6u3u"/><path class="hol9pewyh"/><path class="rn6jsgbjf"/></g>`,
		"fallback": "uix-sharp:test-watch",
	});
}

export default Component;
