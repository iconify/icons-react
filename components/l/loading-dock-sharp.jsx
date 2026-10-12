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
		"content": `<style>.cd596su5p {
  d: path("M11.75 21.25h9.5");
}

.fd2ud0b_q {
  cx: 17.25px;
  cy: 19px;
  r: 1.25px;
}

.jdahq6biz {
  cx: 20px;
  cy: 19px;
  r: 1.25px;
}

.mm1i4--nu {
  d: path("M2.75 12.75h9v8.5h-9zm10 .5L15 15m1-10h5.25v11.5H16z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mm1i4--nu"/><circle class="fd2ud0b_q"/><circle class="jdahq6biz"/><path class="cd596su5p"/></g>`,
		"fallback": "iconoven:loading-dock-sharp",
	});
}

export default Component;
