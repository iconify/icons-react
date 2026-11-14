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
		"content": `<style>.a79f4ibtg {
  d: path("M5.5 5h7v4h-7Zm7 7h9v6.5h-9Zm0 2.75h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwk3cjbps {
  d: path("M15.5 21.3v.2h-13v-19h13v6.7");
}
</style><g class="ulnmmdpxh"><path class="uwk3cjbps"/><path class="a79f4ibtg"/></g>`,
		"fallback": "uix-sharp:prepayment-meter",
	});
}

export default Component;
