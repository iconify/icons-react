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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rbs_qhnvv {
  d: path("M2.5 11.5A1.5 1.5 0 0 1 4 10h2l1.5 1.5H9a1.5 1.5 0 0 1 1.5 1.5v6.5A1.5 1.5 0 0 1 9 21H4a1.5 1.5 0 0 1-1.5-1.5Zm11 0A1.5 1.5 0 0 1 15 10h2l1.5 1.5H20a1.5 1.5 0 0 1 1.5 1.5v6.5A1.5 1.5 0 0 1 20 21h-5a1.5 1.5 0 0 1-1.5-1.5Zm-7.75-8h6a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 11.75 7h-6A1.75 1.75 0 0 1 4 5.25A1.75 1.75 0 0 1 5.75 3.5");
}

.x6gmtllay {
  d: path("M12.5 3.5h5.75A1.75 1.75 0 0 1 20 5.25A1.75 1.75 0 0 1 18.25 7H12.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 12.5 3.5");
}
</style><g class="hntgybcog"><path class="rbs_qhnvv"/><path class="x6gmtllay"/></g>`,
		"fallback": "uix:project-linked",
	});
}

export default Component;
