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
		"content": `<style>.n3tzgdb1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13h9m-9 5h12M12.5 4.5H16m-1.75 0v5m3 0v-5L19 6.75l1.75-2.25v5");
}
</style><path class="n3tzgdb1o"/>`,
		"fallback": "iconoven:trademark-sign",
	});
}

export default Component;
