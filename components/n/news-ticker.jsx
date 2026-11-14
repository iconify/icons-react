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
		"content": `<style>.n4rqmccip {
  d: path("M12.5 9.5L15 12l-2.5 2.5m3.5-5l2.5 2.5l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yjb1udbhb {
  d: path("M2.5 6.5h19v11h-19Zm3 5.5h4");
}
</style><g class="ulnmmdpxh"><path class="yjb1udbhb"/><path class="n4rqmccip"/></g>`,
		"fallback": "uix-sharp:news-ticker",
	});
}

export default Component;
