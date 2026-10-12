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
		"content": `<style>.dld8vub9v {
  cx: 12px;
  cy: 8.5px;
  r: 5.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tmwplobpu {
  d: path("M12 8.6c.75 0 1.2.5 1.2 1.1c0 .85-.85 1.45-1.8 1.45c-1.15 0-2.05-.95-2.05-2.2c0-1.55 1.25-2.75 2.9-2.75c1.85 0 3.15 1.45 3.15 3.3M12 14.25v7M12 17l-1.75-1M12 19.25c.5-1.75 2.25-2.75 4.5-2.75c-.5 1.75-2.25 2.75-4.5 2.75");
}
</style><g class="hntgybcog"><circle class="dld8vub9v"/><path class="tmwplobpu"/></g>`,
		"fallback": "iconoven:rose",
	});
}

export default Component;
