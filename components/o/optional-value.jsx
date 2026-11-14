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
		"content": `<style>.j80ql7f1l {
  d: path("M9.5 9.5a2.5 2.5 0 1 1 3.5 2.25c-.75.25-1 .75-1 1.5M12 16h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw2j_fbcl {
  d: path("M3.5 4.5h17a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="uw2j_fbcl"/><path class="j80ql7f1l"/></g>`,
		"fallback": "uix-sharp:optional-value",
	});
}

export default Component;
