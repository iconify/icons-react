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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xumgsos_e {
  d: path("M12 7.75S9 11.25 9 13a3 3 0 0 0 6 0c0-1.75-3-5.25-3-5.25Z");
}

.y94b542ap {
  d: path("M6 5h15.5L18 19H2.5Z");
}
</style><g class="ulnmmdpxh"><path class="y94b542ap"/><path class="xumgsos_e"/></g>`,
		"fallback": "uix-sharp:pee-pad",
	});
}

export default Component;
