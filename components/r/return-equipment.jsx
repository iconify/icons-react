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
		"content": `<style>.fj0lpnxka {
  d: path("M12.2 15H4.5V3h15v10.3M15.8 21H2.5v-3.5h9.7m6 3.5h-.5m3.3.25v-2.5a2.5 2.5 0 0 0-2.5-2.5H15");
}

.g7y-qhuko {
  d: path("M16.75 14.5L15 16.25L16.75 18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fj0lpnxka"/><path class="g7y-qhuko"/></g>`,
		"fallback": "uix-sharp:return-equipment",
	});
}

export default Component;
