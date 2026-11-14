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
		"content": `<style>.e_6aj-buc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m-9.5-6H9m-5.5 0l.75 6h3l.75-6m7 0h6.5m-5.5 0l.75 6h3l.75-6M12 4.5H4.5m2-2l-2 2l2 2M12 10h7.5m-2-2l2 2l-2 2");
}
</style><path class="e_6aj-buc"/>`,
		"fallback": "uix:sorting-guide",
	});
}

export default Component;
