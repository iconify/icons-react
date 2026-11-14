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
		"content": `<style>.jg7dhrbvi {
  d: path("M5.5 4.5h14a2 2 0 0 1 2 2v10");
}

.majqov-ge {
  d: path("M2.5 7.5h16V20h-16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf0ibxbza {
  d: path("m6 11l4.5 3l4.5-3");
}
</style><g class="ulnmmdpxh"><path class="majqov-ge"/><path class="jg7dhrbvi"/><path class="zf0ibxbza"/></g>`,
		"fallback": "uix-sharp:mail-stack",
	});
}

export default Component;
