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
		"content": `<style>.dv12iga-f {
  d: path("M12 11v7.5a2 2 0 0 1-4 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_066vakd {
  d: path("M2.5 12a9.5 9.5 0 0 1 19 0q-3.25-2-6.25 0q-3.25-2-6.5 0q-3-2-6.25 0Z");
}
</style><g class="ulnmmdpxh"><path class="x_066vakd"/><path class="dv12iga-f"/></g>`,
		"fallback": "uix-sharp:umbrella-open",
	});
}

export default Component;
