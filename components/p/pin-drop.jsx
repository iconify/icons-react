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
		"content": `<style>.lids1m4ab {
  d: path("M12 21.5S4.5 15 4.5 9.75a7.5 7.5 0 0 1 15 0C19.5 15 12 21.5 12 21.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yemucac_p {
  d: path("M9.25 9.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="lids1m4ab"/><path class="yemucac_p"/></g>`,
		"fallback": "uix-sharp:pin-drop",
	});
}

export default Component;
