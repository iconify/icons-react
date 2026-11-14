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
		"content": `<style>.ew-g2_b2w {
  d: path("M14.25 11.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.g9n8a2bec {
  d: path("M12 6.5C10 5 6.5 4.5 2.5 5v13.5c4-.5 7.5 0 9.5 1.5c2-1.5 5.5-2 9.5-1.5V5c-4-.5-7.5 0-9.5 1.5Zm0 0V20M5.25 9.25h4m-4 3.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g9n8a2bec"/><path class="ew-g2_b2w"/></g>`,
		"fallback": "uix-sharp:service-financial-education",
	});
}

export default Component;
