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
		"content": `<style>.uf_erdb7p {
  cx: 9px;
  cy: 7.75px;
  r: 3.5px;
}

.we9xt-b_p {
  d: path("M4 20.25h11.75v-.75c0-3-2.8-5.25-6.25-5.25S3.25 16.5 3.25 19.5v.75zm10.75-12h6.5v5h-6.5zm1.75 2.5h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="uf_erdb7p"/><path class="we9xt-b_p"/></g>`,
		"fallback": "iconoven:user-card-sharp",
	});
}

export default Component;
