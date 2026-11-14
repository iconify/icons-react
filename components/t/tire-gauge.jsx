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
		"content": `<style>.bn208jb_v {
  d: path("M16.5 17.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.kkm-ahb6y {
  d: path("m14.005 4.813l3.182 3.182l-8.132 8.132l-3.182-3.182Zm3.713-.531l-2.122 2.122m-8.132 8.132l-3.182 3.182m9.468-.218a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kkm-ahb6y"/><path class="bn208jb_v"/></g>`,
		"fallback": "uix-sharp:tire-gauge",
	});
}

export default Component;
