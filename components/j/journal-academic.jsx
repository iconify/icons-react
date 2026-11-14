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
		"content": `<style>.f1ha8jb-a {
  d: path("m14 5.5l3.25 1.75L14 9l-3.25-1.75Z");
}

.in945rb_y {
  d: path("M4 2.5h16v19H4Zm3.5 0v19");
}

.lszvceb3m {
  d: path("M12 8v2.5q2 1.25 4 0V8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="in945rb_y"/><path class="f1ha8jb-a"/><path class="lszvceb3m"/></g>`,
		"fallback": "uix-sharp:journal-academic",
	});
}

export default Component;
