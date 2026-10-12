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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rrcjsycgh {
  width: 4px;
  height: 3.5px;
  x: 3.5px;
  y: 9.25px;
  rx: 1px;
}

.zwhjoyb9c {
  d: path("m8.42 8.87l7.16-2.99q.92-.38.92.62v9q0 1-.92.62l-7.16-2.99q-.92-.38-.92-1.38v-1.5q0-1 .92-1.38m1.27 4.82l1.12.47q.69.29.53 1.02l-.93 4.09q-.16.73-.91.73h-1q-.75 0-.61-.74l.97-5.12q.14-.74.83-.45m9.46-5.34a3.75 3.75 0 0 1 0 5.3");
}
</style><g class="hntgybcog"><rect class="rrcjsycgh"/><path class="zwhjoyb9c"/></g>`,
		"fallback": "iconoven:megaphone-alt",
	});
}

export default Component;
