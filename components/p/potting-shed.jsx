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
		"content": `<style>.t4wepcbkl {
  d: path("M9 13h6v8H9Zm0 0l6 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4u7r_b-f {
  d: path("M4.5 9v12h15V9");
}

.x9h11518n {
  d: path("m2.5 10.5l9.5-7l9.5 7");
}
</style><g class="ulnmmdpxh"><path class="x9h11518n"/><path class="v4u7r_b-f"/><path class="t4wepcbkl"/></g>`,
		"fallback": "uix-sharp:potting-shed",
	});
}

export default Component;
