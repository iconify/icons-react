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
		"content": `<style>.n1cia05ds {
  d: path("M10 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.r2329zbeh {
  d: path("M6 2.5h12v19H6ZM9 6h6M9 8.75h6M9 11.5h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r2329zbeh"/><path class="n1cia05ds"/></g>`,
		"fallback": "uix-sharp:intercom",
	});
}

export default Component;
