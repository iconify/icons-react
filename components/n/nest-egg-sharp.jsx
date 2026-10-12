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
		"content": `<style>.e8hlc2bwp {
  d: path("M2.75 13.25h18.5c0 4.5-4 8-9.25 8s-9.25-3.5-9.25-8Z");
}

.fcspzmrsh {
  d: path("m13.13 8.02l-.35-.75h-1.94v.86c0 1.22 2.34.61 2.34 1.78v.83h-2.018l-.292-.73");
}

.i2vqtn8ma {
  d: path("M5.75 16.5L12 18.25l6.25-1.75m-9.53-3.25A4.5 4.75 0 0 1 7.5 10c0-3.5 1.75-6.5 4.5-6.5s4.5 3 4.5 6.5a4.5 4.75 0 0 1-1.22 3.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e8hlc2bwp"/><path class="i2vqtn8ma"/><path class="fcspzmrsh"/></g>`,
		"fallback": "iconoven:nest-egg-sharp",
	});
}

export default Component;
