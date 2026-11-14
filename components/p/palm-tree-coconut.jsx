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
		"content": `<style>.eb3lnjrny {
  d: path("M12 8q.75 7.5-1.5 13.5M12 8q-5-4-9 .5m9-.5Q9 3 5.5 3M12 8q5-4 9 .5M12 8q3-5 6.5-5");
}

.ig8g4j8-y {
  fill: currentColor;
  d: path("M7.5 11.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm6.75 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eb3lnjrny"/><path class="ig8g4j8-y"/></g>`,
		"fallback": "uix-sharp:palm-tree-coconut",
	});
}

export default Component;
