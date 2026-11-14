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
		"content": `<style>.amyxhpovy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5h13l-1.75 7h-9.5Zm6.5 0V6m0 0c-2.5-2.5-6.5-2.5-9 .5m9-.5c2.5-2.5 6.5-2.5 9 .5M12 6c-3.5.5-6 2.5-7 5.5M12 6c3.5.5 6 2.5 7 5.5");
}
</style><path class="amyxhpovy"/>`,
		"fallback": "uix-sharp:potted-palm",
	});
}

export default Component;
