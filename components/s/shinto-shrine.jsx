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
		"content": `<style>.rj36t6wna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25Q12 7 21.25 4.25m-14.75 1v16m11-16v16M4.5 10h15M12 5.75V10");
}
</style><path class="rj36t6wna"/>`,
		"fallback": "iconoven:shinto-shrine",
	});
}

export default Component;
