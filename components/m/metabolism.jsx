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
		"content": `<style>.aihfrab2h {
  d: path("M17.785 5.106a9 9 0 1 1-8.863-1.563");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zovrc_duc {
  d: path("M6.5 3L9 5.25l-2.25 2.5M12 7c2.75 2.5 3.75 4 3.75 6c0 2.25-1.5 3.75-3.75 3.75S8.25 15.25 8.25 13q0-1.875 1.5-3c0 1.25.75 2 1.5 2c0-1.75-.25-3.5.75-5Z");
}
</style><g class="ulnmmdpxh"><path class="aihfrab2h"/><path class="zovrc_duc"/></g>`,
		"fallback": "uix-sharp:metabolism",
	});
}

export default Component;
