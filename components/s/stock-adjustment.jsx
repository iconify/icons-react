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
		"content": `<style>.cah_lcc8z {
  d: path("M12.738 21.131L12 21.5L3 17V7l9-4.5L21 7v6.438");
}

.j39k94b3q {
  d: path("m3 7l9 4.5L21 7m-9 4.5v10M7.5 4.75l9 4.5m1.5 5v4m-2-2h4M15.5 21h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cah_lcc8z"/><path class="j39k94b3q"/></g>`,
		"fallback": "uix-sharp:stock-adjustment",
	});
}

export default Component;
