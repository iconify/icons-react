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
		"content": `<style>.h2844mzsd {
  d: path("M7 5.5h10V14H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wffwdccte {
  d: path("M4 2.5h16v19H4Z");
}

.x7xqwibku {
  d: path("M9.5 14v-3.5l2.5-2l2.5 2V14M7 17.5h10");
}
</style><g class="ulnmmdpxh"><path class="wffwdccte"/><path class="h2844mzsd"/><path class="x7xqwibku"/></g>`,
		"fallback": "uix-sharp:news-photo",
	});
}

export default Component;
