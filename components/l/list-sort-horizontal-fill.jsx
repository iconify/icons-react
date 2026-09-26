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
		"content": `<style>.au88ctbnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 6H3M6 3L3 6L6 9M14 6H21M18 3L21 6L18 9M6 13V21M12 13V21M18 13V21");
}
</style><path class="au88ctbnv"/>`,
		"fallback": "keyline-icons:list-sort-horizontal-fill",
	});
}

export default Component;
