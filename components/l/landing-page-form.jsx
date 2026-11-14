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
		"content": `<style>.eb3_pkztw {
  d: path("M2.5 4h19v16h-19Zm0 4h19");
}

.gzrqh8b2n {
  d: path("M6 11h12v3H6Zm2 6h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eb3_pkztw"/><path class="gzrqh8b2n"/></g>`,
		"fallback": "uix-sharp:landing-page-form",
	});
}

export default Component;
