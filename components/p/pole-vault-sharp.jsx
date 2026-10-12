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
		"content": `<style>.a6hmy3b4l {
  d: path("M10.5 10v11.25m5-11.25v11.25M10.5 10h5");
}

.tsd9o8qdy {
  cx: 19.75px;
  cy: 8.75px;
  r: 1.25px;
}

.wch29_fzp {
  d: path("M3.25 21.25c1-5 2.25-9 4.25-12.25C10 5.25 16 4.75 18.6 7.9");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wch29_fzp"/><circle class="tsd9o8qdy"/><path class="a6hmy3b4l"/></g>`,
		"fallback": "iconoven:pole-vault-sharp",
	});
}

export default Component;
