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
		"content": `<style>.l16e3bc6f {
  d: path("m8 12.5l3 3l5-6");
}

.lqpnckb6o {
  d: path("m12 2.5l8.227 4.75v9.5L12 21.5l-8.227-4.75v-9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lqpnckb6o"/><path class="l16e3bc6f"/></g>`,
		"fallback": "uix-sharp:task-success",
	});
}

export default Component;
