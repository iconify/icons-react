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
		"content": `<style>.c-oie0b8o {
  d: path("M12 15.5c2-7 6.5-8.5 8-4.5v5m-1.5 2.5L20 16l1.5 2.5");
}

.or2erdbgb {
  d: path("M8 15.5h8l-1 6H9Zm4 0c-2-7-6.5-8.5-9-3m9 3c0-5.5.5-10 2.5-12.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="or2erdbgb"/><path class="c-oie0b8o"/></g>`,
		"fallback": "uix-sharp:spider-plant",
	});
}

export default Component;
