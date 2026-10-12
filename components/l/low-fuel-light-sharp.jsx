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
		"content": `<style>.bu9o55b5e {
  d: path("M3 2.75h10.5v18.5H3z");
}

.kf6swqmmh {
  d: path("M6 15.25h4.5v3H6zM13.5 8h3.75v10.25h3V7.5L18 5.25");
}

.megl4yadw {
  d: path("M6 5.75h4.5v12.5H6Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bu9o55b5e"/><path class="megl4yadw"/><path class="kf6swqmmh"/></g>`,
		"fallback": "iconoven:low-fuel-light-sharp",
	});
}

export default Component;
