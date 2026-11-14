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
		"content": `<style>.j5_35pblj {
  d: path("M12.2 19.5H8.5l-5-7.5l5-7.5h11v7.7M8.25 12h.01");
}

.o2ri3wycp {
  d: path("M14.5 17.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm4.75 2l2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j5_35pblj"/><path class="o2ri3wycp"/></g>`,
		"fallback": "uix-sharp:price-tag-search",
	});
}

export default Component;
