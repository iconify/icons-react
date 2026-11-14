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
		"content": `<style>.gea_8ebaj {
  d: path("m12 5l.735 1.739l1.88.161l-1.426 1.236l.427 1.839L12 9l-1.616.975l.427-1.839L9.385 6.9l1.88-.161Z");
}

.hnds7ac1m {
  d: path("M3 9c0-3.5 4-6 9-6s9 2.5 9 6l-2 3H5Zm2 3h14v3.5H5Zm0 3.5c0 3 3 5 7 5s7-2 7-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hnds7ac1m"/><path class="gea_8ebaj"/></g>`,
		"fallback": "uix-sharp:mall-security-desk",
	});
}

export default Component;
