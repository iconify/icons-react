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
		"content": `<style>.flos5eqbe {
  d: path("M12.828 21.464a9.5 9.5 0 1 1 8.636-8.636");
}

.r-rpwbb5u {
  d: path("M17.75 15A3 3 0 1 0 21 18.25A2.5 2.5 0 0 1 17.75 15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="flos5eqbe"/><path class="r-rpwbb5u"/></g>`,
		"fallback": "uix-sharp:status-away",
	});
}

export default Component;
