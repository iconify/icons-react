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
		"content": `<style>.pm2t7op3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.55 3.02L3.45 9.73q-.7.27-.03.61l6.16 3.07q.67.34 1.01 1.01l3.07 6.16q.34.67.61-.03l6.71-17.1q.27-.7-.43-.43m-10.3 10.73l5-5m-12.5 12.5c1.75 0 3.5-.75 4-2.25c.4-1.25-.9-2.1-1.9-1.2c-.95.9.05 2.5 1.75 2.6c1.1.1 2.15-.2 2.9-.65");
}
</style><path class="pm2t7op3o"/>`,
		"fallback": "iconoven:paper-plane-toy",
	});
}

export default Component;
