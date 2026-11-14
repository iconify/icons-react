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
		"content": `<style>.retq24bot {
  d: path("M7.75 8.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm-1.5 7.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-5ry-k5x {
  d: path("M3.5 15.75a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm8.5 0a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Z");
}

.yet4d3bfm {
  d: path("M10.5 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="y-5ry-k5x"/><path class="retq24bot"/><path class="yet4d3bfm"/></g>`,
		"fallback": "uix-sharp:log-pile",
	});
}

export default Component;
