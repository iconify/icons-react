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
		"content": `<style>.l6562qbqp {
  d: path("M5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM5.5 10h13M12 5.5V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrd045n-g {
  d: path("M2.5 14.5V11q0-1 1-1h2l3-4.5H15l3.5 4.5h2q1 0 1 1v3.5Z");
}
</style><g class="ulnmmdpxh"><path class="vrd045n-g"/><path class="l6562qbqp"/></g>`,
		"fallback": "uix-sharp:rideshare-pickup",
	});
}

export default Component;
