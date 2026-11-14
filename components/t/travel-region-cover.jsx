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
		"content": `<style>.a1s6o2b9n {
  d: path("m3 5.5l6-2l6 2l6-2v15l-6 2l-6-2l-6 2Z");
}

.le7anubww {
  d: path("M12 17c-2-2.5-3.5-4.25-3.5-6.25a3.5 3.5 0 0 1 7 0c0 2-1.5 3.75-3.5 6.25Zm0-6.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a1s6o2b9n"/><path class="le7anubww"/></g>`,
		"fallback": "uix-sharp:travel-region-cover",
	});
}

export default Component;
