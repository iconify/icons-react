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
		"content": `<style>.bigsk3vgs {
  fill: currentColor;
  d: path("M3 10h8v4H3Z");
}

.dvr-mgrti {
  d: path("M15 12h.01M20 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bigsk3vgs"/><path class="dvr-mgrti"/></g>`,
		"fallback": "uix-sharp:pagination",
	});
}

export default Component;
