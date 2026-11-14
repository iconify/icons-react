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
		"content": `<style>.f8us3mbho {
  d: path("m3 7l9 4.5L21 7m-9 4.5v10M7.5 4.75l9 4.5m-1 5h5v7L18 19.5l-2.5 1.75Z");
}

.jvrlr9bzu {
  d: path("M12.738 21.131L12 21.5L3 17V7l9-4.5L21 7v4.438");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jvrlr9bzu"/><path class="f8us3mbho"/></g>`,
		"fallback": "uix-sharp:stock-reserved",
	});
}

export default Component;
