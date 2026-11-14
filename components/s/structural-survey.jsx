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
		"content": `<style>.asii2ad5h {
  d: path("M2 9h20v7H2Zm0 10.5h20");
}

.cu4wqrbkh {
  d: path("M9 10.75h6v3.5H9Zm3 1.75h.01M5.5 11v3m13-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="asii2ad5h"/><path class="cu4wqrbkh"/></g>`,
		"fallback": "uix-sharp:structural-survey",
	});
}

export default Component;
