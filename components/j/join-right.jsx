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
		"content": `<style>.rie4z-j_m {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm7-2.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm0 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.u3v3lgbld {
  d: path("M10 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxxcdij5x {
  d: path("M2 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}
</style><g class="ulnmmdpxh"><path class="xxxcdij5x"/><path class="u3v3lgbld"/><path class="rie4z-j_m"/></g>`,
		"fallback": "uix-sharp:join-right",
	});
}

export default Component;
