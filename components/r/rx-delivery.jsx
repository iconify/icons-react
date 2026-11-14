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
		"content": `<style>.i0sky3wiv {
  d: path("M5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-8-11V9");
}

.kh6cjybjd {
  d: path("M2.5 14.5h19V10l-3-3.5h-4v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uumua7but {
  d: path("M3 5.5h9v9H3Z");
}
</style><g class="ulnmmdpxh"><path class="kh6cjybjd"/><path class="uumua7but"/><path class="i0sky3wiv"/></g>`,
		"fallback": "uix-sharp:rx-delivery",
	});
}

export default Component;
