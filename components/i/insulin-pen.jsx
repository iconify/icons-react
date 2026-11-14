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
		"content": `<style>.fjqmfnb1s {
  d: path("m15.182 6.697l1.768-1.768l2.121 2.121l-1.768 1.768Zm-4.596 2.475l2.475-2.475m-2.475 2.475l.884.883");
}

.jcxtdubuh {
  d: path("m5.459 16.066l9.546-9.546l2.475 2.475l-9.546 9.546Zm1.238 1.237l-1.415 1.415");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jcxtdubuh"/><path class="fjqmfnb1s"/></g>`,
		"fallback": "uix-sharp:insulin-pen",
	});
}

export default Component;
