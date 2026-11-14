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
		"content": `<style>.egsfzqb1r {
  d: path("M9 2.5V8m-6.5 6.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.hwdp53bns {
  d: path("M6.5 14.5a2.5 6.5 0 1 0 5 0a2.5 6.5 0 1 0-5 0ZM17 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0V2.5");
}

.k280clidi {
  d: path("M2.5 14.5a6.5 2.5 0 1 0 13 0a6.5 2.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="egsfzqb1r"/><path class="k280clidi"/><path class="hwdp53bns"/></g>`,
		"fallback": "uix-sharp:music-club",
	});
}

export default Component;
