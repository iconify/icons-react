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
		"content": `<style>.gzn71byzt {
  d: path("M2.5 7H11v13H2.5Zm19-3v14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xoum9jbqd {
  d: path("M4.5 9.5H9V13H4.5Zm2.25 7h.01M13 11h2m2 0h2");
}
</style><g class="ulnmmdpxh"><path class="gzn71byzt"/><path class="xoum9jbqd"/></g>`,
		"fallback": "uix-sharp:laser-measure",
	});
}

export default Component;
