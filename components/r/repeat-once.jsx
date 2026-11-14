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
		"content": `<style>.c1jcvfbdh {
  d: path("M16.5 2.5L19 5l-2.5 2.5m4 3.5v5a3 3 0 0 1-3 3H5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlhipr5av {
  d: path("M7.5 16.5L5 19l2.5 2.5m4.5-13v7m-1.75-5.25L12 8.5");
}

.yu7lu8bnl {
  d: path("M3.5 13V8a3 3 0 0 1 3-3H19");
}
</style><g class="ulnmmdpxh"><path class="yu7lu8bnl"/><path class="c1jcvfbdh"/><path class="vlhipr5av"/></g>`,
		"fallback": "uix-sharp:repeat-once",
	});
}

export default Component;
